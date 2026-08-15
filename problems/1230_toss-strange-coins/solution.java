class Solution {

    public double probabilityOfHeads(double[] prob, int target) {
        double[] dp = new double[target + 1];
        dp[0] = 1.0;
        for (double p : prob) {
            for (int c = target; c > 0; c--) {
                dp[c] = dp[c] * (1 - p) + dp[c - 1] * p;
            }
            dp[0] *= 1 - p;
        }
        return dp[target];
    }
}
