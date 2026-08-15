class Solution {
  public:
    int numDistinct(string s, string t) {
        int m = (int)t.size();
        vector<long long> dp(m + 1, 0);
        dp[0] = 1;
        for (char ch : s) {
            for (int j = m; j > 0; j--) {
                if (t[j - 1] == ch) {
                    dp[j] += dp[j - 1];
                }
            }
        }
        return (int)dp[m];
    }
};
