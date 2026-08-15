class Solution {
  public:
    long long mostPoints(vector<vector<int>> &questions) {
        int n = questions.size();
        vector<long long> dp(n + 1, 0);
        for (int i = n - 1; i >= 0; i--) {
            long long points = questions[i][0];
            int nxt = i + questions[i][1] + 1;
            long long take = points + (nxt <= n ? dp[nxt] : 0);
            dp[i] = max(dp[i + 1], take);
        }
        return dp[0];
    }
};
