class Solution {

    public int reconcileDeletionCost(String left, String right) {
        final char[] a = left.toCharArray();
        final char[] b = right.toCharArray();
        final int la = a.length,
            lb = b.length;
        // dp[i][j] = least discard cost for reconciling the prefixes a[:i], b[:j].
        int[][] dp = new int[la + 1][lb + 1];
        // Boundary states: an unmatched prefix must be discarded in full.
        for (int j = 1; j <= lb; j++) {
            dp[0][j] = dp[0][j - 1] + b[j - 1];
        }
        for (int i = 1; i <= la; i++) {
            dp[i][0] = dp[i - 1][0] + a[i - 1];
            for (int j = 1; j <= lb; j++) {
                if (a[i - 1] == b[j - 1]) {
                    // Matching characters transfer the diagonal state unchanged.
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    // Different characters force one weighted discard.
                    dp[i][j] = Math.min(dp[i - 1][j] + a[i - 1], dp[i][j - 1] + b[j - 1]);
                }
            }
        }
        return dp[la][lb];
    }
}
