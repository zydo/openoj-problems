import java.util.*;

class Solution {

    public int maximumANDSum(int[] nums, int numSlots) {
        int positions = 2 * numSlots;
        int size = 1 << positions;
        int[] dp = new int[size];
        Arrays.fill(dp, -1);
        dp[0] = 0;
        int best = 0;
        for (int mask = 0; mask < size; mask++) {
            if (dp[mask] < 0) {
                continue;
            }
            int i = Integer.bitCount(mask);
            if (i == nums.length) {
                best = Math.max(best, dp[mask]);
                continue;
            }
            for (int p = 0; p < positions; p++) {
                if ((mask & (1 << p)) != 0) {
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
}
