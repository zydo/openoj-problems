class Solution {
  public:
    int reconcileDeletionCost(string left, string right) {
        const string &a = left;
        const string &b = right;
        const int la = (int)a.size(), lb = (int)b.size();
        // dp[i][j] = least discard cost for reconciling the prefixes a[:i], b[:j].
        vector<vector<int>> dp(la + 1, vector<int>(lb + 1, 0));
        // Boundary states: an unmatched prefix must be discarded in full.
        for (int j = 1; j <= lb; j++) {
            dp[0][j] = dp[0][j - 1] + (int)b[j - 1];
        }
        for (int i = 1; i <= la; i++) {
            dp[i][0] = dp[i - 1][0] + (int)a[i - 1];
            for (int j = 1; j <= lb; j++) {
                if (a[i - 1] == b[j - 1]) {
                    // Matching characters transfer the diagonal state unchanged.
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    // Different characters force one weighted discard.
                    dp[i][j] = min(dp[i - 1][j] + (int)a[i - 1], dp[i][j - 1] + (int)b[j - 1]);
                }
            }
        }
        return dp[la][lb];
    }
};
