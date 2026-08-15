class Solution {
  public:
    string encode(string s) {
        int n = (int)s.size();
        vector<vector<string>> dp(n, vector<string>(n));
        for (int length = 1; length <= n; length++) {
            for (int i = 0; i + length <= n; i++) {
                int j = i + length - 1;
                string substr = s.substr(i, length);
                string best = substr;
                for (int k = i; k < j; k++) {
                    string candidate = dp[i][k] + dp[k + 1][j];
                    if ((int)candidate.size() < (int)best.size()) {
                        best = candidate;
                    }
                }
                string compression;
                bool hasCompression = false;
                for (int p = 1; p < length; p++) {
                    if (length % p == 0) {
                        string pattern = s.substr(i, p);
                        string repeated;
                        for (int t = 0; t < length / p; t++) {
                            repeated += pattern;
                        }
                        if (repeated == substr) {
                            string encoded = to_string(length / p) + "[" + dp[i][i + p - 1] + "]";
                            if (!hasCompression || (int)encoded.size() < (int)compression.size()) {
                                compression = encoded;
                                hasCompression = true;
                            }
                        }
                    }
                }
                if (hasCompression) {
                    if ((int)compression.size() < (int)best.size() ||
                        ((int)compression.size() == (int)best.size() && best != substr)) {
                        best = compression;
                    }
                }
                dp[i][j] = best;
            }
        }
        return dp[0][n - 1];
    }
};
