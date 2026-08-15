class Solution {

    public int numDistinct(String s, String t) {
        int m = t.length();
        long[] dp = new long[m + 1];
        dp[0] = 1;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            for (int j = m; j > 0; j--) {
                if (t.charAt(j - 1) == ch) {
                    dp[j] += dp[j - 1];
                }
            }
        }
        return (int) dp[m];
    }
}
