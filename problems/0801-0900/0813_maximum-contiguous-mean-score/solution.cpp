class Solution {
  public:
    double maximumContiguousMeanScore(vector<int> &values, int groupLimit) {
        int n = values.size();
        vector<long long> prefix(n + 1, 0);
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + values[i];
        }

        // dp[i] = best(i, groups) for the current group count.
        // groups == 1: the whole remaining suffix is one group.
        vector<double> dp(n);
        for (int i = 0; i < n; i++) {
            dp[i] = (double)(prefix[n] - prefix[i]) / (n - i);
        }

        for (int groups = 2; groups <= groupLimit; groups++) {
            vector<double> ndp(n, 0.0);
            for (int i = 0; i <= n - groups; i++) {
                double result = 0.0;
                for (int j = i + 1; j <= n - groups + 1; j++) {
                    result = max(result, (double)(prefix[j] - prefix[i]) / (j - i) + dp[j]);
                }
                ndp[i] = result;
            }
            dp = ndp;
        }

        return dp[0];
    }
};
