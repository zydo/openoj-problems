class Solution {
  public:
    string shortestCommonSupersequence(string s, string t) {
        int n = s.size();
        int m = t.size();
        // dp[i][j] = length of the LCS of s[i:] and t[j:].
        vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
        for (int i = n - 1; i >= 0; i--) {
            for (int j = m - 1; j >= 0; j--) {
                if (s[i] == t[j]) {
                    dp[i][j] = dp[i + 1][j + 1] + 1;
                } else {
                    dp[i][j] = max(dp[i + 1][j], dp[i][j + 1]);
                }
            }
        }

        string result;
        result.reserve(n + m);
        int i = 0;
        int j = 0;
        while (i < n && j < m) {
            if (s[i] == t[j]) {
                result.push_back(s[i]);
                i += 1;
                j += 1;
            } else if (dp[i + 1][j] >= dp[i][j + 1]) {
                result.push_back(s[i]);
                i += 1;
            } else {
                result.push_back(t[j]);
                j += 1;
            }
        }
        result.append(s, i, n - i);
        result.append(t, j, m - j);
        return result;
    }
};
