class Solution {
  public:
    int minDistance(string word1, string word2) {
        const string &a = word1;
        const string &b = word2;
        const int la = (int)a.size(), lb = (int)b.size();
        vector<vector<int>> dp(la + 1, vector<int>(lb + 1, 0));
        for (int i = 1; i <= la; i++) {
            for (int j = 1; j <= lb; j++) {
                if (a[i - 1] == b[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return la + lb - 2 * dp[la][lb];
    }
};
