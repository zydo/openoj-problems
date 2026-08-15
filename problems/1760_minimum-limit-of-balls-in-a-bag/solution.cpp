class Solution {
  public:
    int minimumSize(vector<int> &nums, int maxOperations) {
        auto needed = [&](int penalty) {
            long long total = 0;
            for (int balls : nums) {
                total += (balls - 1) / penalty;
            }
            return total;
        };

        int lo = 1;
        int hi = *max_element(nums.begin(), nums.end());
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (needed(mid) <= maxOperations) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }
};
