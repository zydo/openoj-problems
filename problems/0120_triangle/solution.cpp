class Solution {
  public:
    int minimumTotal(vector<vector<int>> &triangle) {
        int n = static_cast<int>(triangle.size());
        vector<long long> dp(triangle[n - 1].begin(), triangle[n - 1].end());
        for (int row = n - 2; row >= 0; row--) {
            for (int i = 0; i < static_cast<int>(triangle[row].size()); i++) {
                dp[i] = static_cast<long long>(triangle[row][i]) + min(dp[i], dp[i + 1]);
            }
        }
        return static_cast<int>(dp[0]);
    }
};
