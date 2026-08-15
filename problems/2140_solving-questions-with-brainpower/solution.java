class Solution {

    public long mostPoints(int[][] questions) {
        int n = questions.length;
        long[] dp = new long[n + 1];
        for (int i = n - 1; i >= 0; i--) {
            long points = questions[i][0];
            int brainpower = questions[i][1];
            int nxt = i + brainpower + 1;
            long take = points + (nxt <= n ? dp[nxt] : 0);
            dp[i] = Math.max(dp[i + 1], take);
        }
        return dp[0];
    }
}
