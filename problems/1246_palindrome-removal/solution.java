class Solution {

    public int minimumMoves(int[] arr) {
        int n = arr.length;
        if (n == 0) return 0;

        int[][] dp = new int[n][n];
        for (int i = 0; i < n; i++) dp[i][i] = 1;
        for (int i = 0; i + 1 < n; i++) dp[i][i + 1] =
            arr[i] == arr[i + 1] ? 1 : 2;

        for (int length = 3; length <= n; length++) {
            for (int i = 0; i + length <= n; i++) {
                int j = i + length - 1;
                int best = 1 + dp[i + 1][j];
                for (int k = i; k < j; k++) {
                    int candidate = dp[i][k] + dp[k + 1][j];
                    if (candidate < best) best = candidate;
                }
                if (arr[i] == arr[j] && dp[i + 1][j - 1] < best) best = dp[
                    i + 1
                ][j - 1];
                dp[i][j] = best;
            }
        }
        return dp[0][n - 1];
    }
}
