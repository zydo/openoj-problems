class Solution {
  public:
    double probabilityOfHeads(vector<double> &prob, int target) {
        vector<double> dp(target + 1, 0.0);
        dp[0] = 1.0;
        for (double p : prob) {
            for (int c = target; c > 0; c--) {
                double t1 = dp[c] * (1 - p);
                double t2 = dp[c - 1] * p;
                dp[c] = t1 + t2;
            }
            dp[0] *= 1 - p;
        }
        return dp[target];
    }
};
