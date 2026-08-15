class Solution {

    public int findMaxForm(String[] strs, int m, int n) {
        int[][] dp = new int[m + 1][n + 1];
        for (String s : strs) {
            int zeros = 0;
            for (int i = 0; i < s.length(); i++) {
                if (s.charAt(i) == '0') zeros++;
            }
            int ones = s.length() - zeros;
            for (int i = m; i >= zeros; i--) {
                for (int j = n; j >= ones; j--) {
                    int cand = dp[i - zeros][j - ones] + 1;
                    if (cand > dp[i][j]) dp[i][j] = cand;
                }
            }
        }
        return dp[m][n];
    }
}
