class Solution {

    public int maxValueOfCoins(int[][] piles, int k) {
        int[] dp = new int[k + 1];
        for (int[] pile : piles) {
            int[] prefix = new int[pile.length + 1];
            for (int i = 0; i < pile.length; i++) {
                prefix[i + 1] = prefix[i] + pile[i];
            }
            int takeMax = Math.min(pile.length, k);
            int[] ndp = new int[k + 1];
            for (int j = 0; j <= k; j++) {
                int value = dp[j];
                int lim = Math.min(takeMax, j);
                for (int t = 1; t <= lim; t++) {
                    int cand = dp[j - t] + prefix[t];
                    if (cand > value) value = cand;
                }
                ndp[j] = value;
            }
            dp = ndp;
        }
        return dp[k];
    }
}
