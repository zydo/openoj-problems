class Solution {
  public:
    int maxSubarraySumCircular(vector<int> &nums) {
        long long total = 0;
        for (int x : nums) {
            total += x;
        }
        long long curMax = nums[0], bestMax = nums[0];
        long long curMin = nums[0], bestMin = nums[0];
        for (int i = 1; i < (int)nums.size(); i++) {
            long long x = nums[i];
            curMax = x + max(curMax, 0LL);
            bestMax = max(bestMax, curMax);
            curMin = x + min(curMin, 0LL);
            bestMin = min(bestMin, curMin);
        }
        if (bestMax < 0) {
            return (int)bestMax;
        }
        return (int)max(bestMax, total - bestMin);
    }
};
