class Solution {
  public:
    int maximizeTheProfit(int n, vector<vector<int>> &offers) {
        vector<vector<pair<int, int>>> byEnd(n);
        for (const auto &offer : offers) {
            byEnd[offer[1]].push_back({offer[0], offer[2]});
        }
        vector<long long> dp(n + 1, 0);
        for (int end = 0; end < n; end++) {
            dp[end + 1] = dp[end];
            for (const auto &[start, gold] : byEnd[end]) {
                long long cand = dp[start] + gold;
                if (cand > dp[end + 1]) {
                    dp[end + 1] = cand;
                }
            }
        }
        return (int)dp[n];
    }
};
