class Solution {

    public int numberOfPaths(int[][] grid, int k) {
        final int MOD = 1000000007;
        int m = grid.length;
        int n = grid[0].length;
        long[][] dp = new long[n][k];
        boolean[] alive = new boolean[n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int g = ((grid[i][j] % k) + k) % k;
                if (i == 0 && j == 0) {
                    java.util.Arrays.fill(dp[j], 0L);
                    dp[j][g] = 1;
                    alive[j] = true;
                    continue;
                }
                long[] cur = new long[k];
                if (i > 0 && alive[j]) {
                    long[] above = dp[j];
                    for (int v = 0; v < k; v++) {
                        int src = (((v - g) % k) + k) % k;
                        cur[v] = above[src];
                    }
                }
                if (j > 0 && alive[j - 1]) {
                    long[] left = dp[j - 1];
                    for (int v = 0; v < k; v++) {
                        int src = (((v - g) % k) + k) % k;
                        cur[v] = (cur[v] + left[src]) % MOD;
                    }
                }
                dp[j] = cur;
                alive[j] = true;
            }
        }
        return (int) (dp[n - 1][0] % MOD);
    }
}
