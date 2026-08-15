class Solution {

    public int specialPerm(int[] nums) {
        final int MOD = 1000000007;
        int n = nums.length;
        int size = 1 << n;
        int[][] dp = new int[size][n];
        for (int i = 0; i < n; i++) {
            dp[1 << i][i] = 1;
        }
        for (int mask = 0; mask < size; mask++) {
            for (int last = 0; last < n; last++) {
                if (((mask >> last) & 1) == 0) {
                    continue;
                }
                int ways = dp[mask][last];
                if (ways == 0) {
                    continue;
                }
                for (int nxt = 0; nxt < n; nxt++) {
                    if (((mask >> nxt) & 1) != 0) {
                        continue;
                    }
                    if (
                        nums[last] % nums[nxt] == 0 ||
                        nums[nxt] % nums[last] == 0
                    ) {
                        int[] t = dp[mask | (1 << nxt)];
                        t[nxt] = (t[nxt] + ways) % MOD;
                    }
                }
            }
        }
        long total = 0;
        for (int i = 0; i < n; i++) {
            total = (total + dp[size - 1][i]) % MOD;
        }
        return (int) total;
    }
}
