class Solution {
  public:
    int bestClipLevel(vector<int> &nums, int target) {
        int hi = *max_element(nums.begin(), nums.end());
        int lo = 0;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (mutatedSum(nums, mid) >= (long long)target)
                hi = mid;
            else
                lo = mid + 1;
        }
        long long below = mutatedSum(nums, lo - 1);
        long long at = mutatedSum(nums, lo);
        if (llabs(below - target) <= llabs(at - target)) {
            return lo - 1;
        }
        return lo;
    }

  private:
    long long mutatedSum(vector<int> &nums, int value) {
        long long sum = 0;
        for (int x : nums) {
            sum += min<long long>(x, value);
        }
        return sum;
    }
};
