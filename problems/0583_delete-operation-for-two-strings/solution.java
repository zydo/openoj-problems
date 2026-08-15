class Solution {

    public int minDistance(String word1, String word2) {
        final char[] a = word1.toCharArray();
        final char[] b = word2.toCharArray();
        final int la = a.length,
            lb = b.length;
        int[][] dp = new int[la + 1][lb + 1];
        for (int i = 1; i <= la; i++) {
            for (int j = 1; j <= lb; j++) {
                if (a[i - 1] == b[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return la + lb - 2 * dp[la][lb];
    }
}
