class Solution {
  public:
    int maximumANDSum(vector<int> &nums, int numSlots) {
        int positions = 2 * numSlots;
        int size = 1 << positions;
        vector<int> dp(size, -1);
        dp[0] = 0;
        int best = 0;
        for (int mask = 0; mask < size; mask++) {
            if (dp[mask] < 0) {
                continue;
            }
            int i = __builtin_popcount(mask);
            if (i == (int)nums.size()) {
                best = max(best, dp[mask]);
                continue;
            }
            for (int p = 0; p < positions; p++) {
                if (mask & (1 << p)) {
                    continue;
                }
                int nxt = dp[mask] + (nums[i] & (p / 2 + 1));
                int slotMask = mask | (1 << p);
                if (nxt > dp[slotMask]) {
                    dp[slotMask] = nxt;
                }
            }
        }
        return best;
    }
};
