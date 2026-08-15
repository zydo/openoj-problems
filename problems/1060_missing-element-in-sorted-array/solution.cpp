class Solution {
  public:
    int missingElement(vector<int> &nums, int k) {
        int n = nums.size();
        auto missing = [&](int i) { return nums[i] - nums[0] - i; };
        if (missing(n - 1) < k) {
            return nums[n - 1] + (k - missing(n - 1));
        }
        int lo = 0, hi = n - 1;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (missing(mid) >= k) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return nums[lo - 1] + (k - missing(lo - 1));
    }
};
