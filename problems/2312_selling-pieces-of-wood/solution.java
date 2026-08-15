class Solution {

    public long sellingWood(int m, int n, int[][] prices) {
        long[][] price = new long[m + 1][n + 1];
        for (int[] p : prices) {
            if (price[p[0]][p[1]] < p[2]) price[p[0]][p[1]] = p[2];
        }
        long[][] dp = new long[m + 1][n + 1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                long best = price[i][j];
                long[] row = dp[i];
                for (int h = 1; h <= i / 2; h++) {
                    long v = dp[h][j] + dp[i - h][j];
                    if (v > best) best = v;
                }
                for (int w = 1; w <= j / 2; w++) {
                    long v = row[w] + row[j - w];
                    if (v > best) best = v;
                }
                dp[i][j] = best;
            }
        }
        return dp[m][n];
    }
}
