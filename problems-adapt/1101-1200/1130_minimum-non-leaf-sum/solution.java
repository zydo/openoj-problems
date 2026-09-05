class Solution {

    public int minimumNonLeafSum(int[] leaves) {
        int n = leaves.length;
        // dp[i][j] = min sum of non-leaf nodes for subarray leaves[i..j]
        int[][] dp = new int[n][n];
        // maxi[i][j] = max leaf value in leaves[i..j]
        int[][] maxi = new int[n][n];
        for (int i = 0; i < n; i++) {
            maxi[i][i] = leaves[i];
        }
        for (int length = 2; length <= n; length++) {
            for (int i = 0; i + length - 1 < n; i++) {
                int j = i + length - 1;
                maxi[i][j] = Math.max(maxi[i][j - 1], leaves[j]);
            }
        }
        for (int length = 2; length <= n; length++) {
            for (int i = 0; i + length - 1 < n; i++) {
                int j = i + length - 1;
                int best = Integer.MAX_VALUE;
                for (int k = i; k < j; k++) {
                    int cost = maxi[i][k] * maxi[k + 1][j] + dp[i][k] + dp[k + 1][j];
                    if (cost < best) {
                        best = cost;
                    }
                }
                dp[i][j] = best;
            }
        }
        return dp[0][n - 1];
    }
}
