class Solution {

    public double boundedFinalScoreProbability(int scoreLimit, int stopScore, int drawMaximum) {
        if (stopScore == 0 || scoreLimit >= stopScore - 1 + drawMaximum) {
            return 1.0;
        }
        // dp[i] = probability of ever holding exactly i points.
        double[] dp = new double[scoreLimit + 1];
        dp[0] = 1.0;
        double window = 1.0; // sum of dp[max(0, i - drawMaximum) .. i - 1]
        for (int i = 1; i <= scoreLimit; i++) {
            dp[i] = window / drawMaximum;
            if (i < stopScore) {
                window += dp[i];
            }
            if (i - drawMaximum >= 0) {
                window -= dp[i - drawMaximum];
            }
        }
        // Compensated (Neumaier) summation, matching the reference's built-in sum().
        double result = 0.0;
        double c = 0.0;
        for (int i = stopScore; i <= scoreLimit; i++) {
            double x = dp[i];
            double t = result + x;
            if (Math.abs(result) >= Math.abs(x)) {
                c += result - t + x;
            } else {
                c += x - t + result;
            }
            result = t;
        }
        return result + c;
    }
}
