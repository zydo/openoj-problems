import java.util.Arrays;

class Solution {

    public int minOperations(int[] nums) {
        // Position 0 is frozen, so every later value is a multiple of the
        // one before it. Cap the value axis at 2 * max(nums): no optimal
        // chain ever needs a value above that (exchange argument in
        // solutions.md).
        int n = nums.length;
        if (n == 1) {
            return 0;
        }
        int maxVal = 0;
        for (int value : nums) {
            maxVal = Math.max(maxVal, value);
        }
        int cap = 2 * maxVal;
        final int INF = (int) 1e9;
        int[] dp = new int[cap + 1];
        int[] ndp = new int[cap + 1];
        Arrays.fill(dp, INF);
        dp[nums[0]] = 0;
        for (int i = 1; i < n; i++) {
            int x = nums[i];
            Arrays.fill(ndp, INF);
            for (int u = 1; u <= cap; u++) {
                if (dp[u] >= INF) {
                    continue;
                }
                // First multiple of u reaching x, then every multiple after.
                int start = ((x + u - 1) / u) * u;
                for (int v = start; v <= cap; v += u) {
                    int cand = dp[u] + (v - x);
                    if (cand < ndp[v]) {
                        ndp[v] = cand;
                    }
                }
            }
            int[] tmp = dp;
            dp = ndp;
            ndp = tmp;
        }
        int ans = INF;
        for (int v : dp) {
            ans = Math.min(ans, v);
        }
        return ans;
    }
}
