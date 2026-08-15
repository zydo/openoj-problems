class Solution {
    long long countLe(const vector<int> &nums, int dist) {
        long long cnt = 0;
        size_t j = 0;
        for (size_t i = 0; i < nums.size(); i++) {
            while (j < nums.size() && nums[j] - nums[i] <= dist) {
                j++;
            }
            cnt += (long long)j - (long long)i - 1;
        }
        return cnt;
    }

  public:
    int smallestDistancePair(vector<int> &nums, int k) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        int lo = 0;
        int hi = nums[n - 1] - nums[0];
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (countLe(nums, mid) >= k) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }
};
