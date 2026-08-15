class Solution {
  public:
    int paintWalls(vector<int> &cost, vector<int> &time) {
        int n = cost.size();
        const long long INF = 1e18;
        vector<long long> dp(n + 1, INF);
        dp[0] = 0;
        for (int i = 0; i < n; i++) {
            int weight = time[i] + 1;
            long long c = cost[i];
            for (int j = n; j >= 1; j--) {
                int src = j >= weight ? j - weight : 0;
                long long cand = dp[src] + c;
                if (cand < dp[j])
                    dp[j] = cand;
            }
        }
        return (int)dp[n];
    }
};
