class Solution {
  public:
    int minimumNonLeafSum(vector<int> &leaves) {
        int n = leaves.size();
        // dp[i][j] = min sum of non-leaf nodes for subarray leaves[i..j]
        vector<vector<int>> dp(n, vector<int>(n, 0));
        // maxi[i][j] = max leaf value in leaves[i..j]
        vector<vector<int>> maxi(n, vector<int>(n, 0));
        for (int i = 0; i < n; i++) {
            maxi[i][i] = leaves[i];
        }
        for (int length = 2; length <= n; length++) {
            for (int i = 0; i + length - 1 < n; i++) {
                int j = i + length - 1;
                maxi[i][j] = max(maxi[i][j - 1], leaves[j]);
            }
        }
        for (int length = 2; length <= n; length++) {
            for (int i = 0; i + length - 1 < n; i++) {
                int j = i + length - 1;
                int best = INT_MAX;
                for (int k = i; k < j; k++) {
                    int cost = maxi[i][k] * maxi[k + 1][j] + dp[i][k] + dp[k + 1][j];
                    if (cost < best) {
                        best = cost;
                    }
                }
                dp[i][j] = best;
            }
        }
        return dp[0][n - 1];
    }
};
