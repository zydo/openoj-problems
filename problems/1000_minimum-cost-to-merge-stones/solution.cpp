class Solution {
  public:
    int mergeStones(vector<int> &stones, int k) {
        int n = stones.size();
        if ((n - 1) % (k - 1) != 0) {
            return -1;
        }
        const long long INF = LLONG_MAX / 4;
        vector<long long> prefix(n + 1, 0);
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + stones[i];
        }
        vector<vector<vector<long long>>> dp(
            n, vector<vector<long long>>(n, vector<long long>(k + 1, INF)));
        for (int i = 0; i < n; i++) {
            dp[i][i][1] = 0;
        }
        for (int length = 2; length <= n; length++) {
            for (int i = 0; i + length - 1 < n; i++) {
                int j = i + length - 1;
                for (int m = 2; m <= k; m++) {
                    for (int mid = i; mid < j; mid++) {
                        if (dp[i][mid][1] < INF && dp[mid + 1][j][m - 1] < INF) {
                            dp[i][j][m] = min(dp[i][j][m], dp[i][mid][1] + dp[mid + 1][j][m - 1]);
                        }
                    }
                }
                if (dp[i][j][k] < INF) {
                    dp[i][j][1] = dp[i][j][k] + prefix[j + 1] - prefix[i];
                }
            }
        }
        return dp[0][n - 1][1] < INF ? (int)dp[0][n - 1][1] : -1;
    }
};
