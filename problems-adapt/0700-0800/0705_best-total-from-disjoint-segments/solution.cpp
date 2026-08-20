class Solution {
  public:
    int maxDisjointTotal(int n, vector<vector<int>> &segments) {
        // Non-overlapping segments make this weighted interval scheduling on a
        // line. Bucket segments by end position — the bucket array itself
        // provides ordering by end position, so no sorting is needed.
        vector<vector<pair<int, int>>> byEnd(n);
        for (const auto &offer : segments) {
            byEnd[offer[1]].push_back({offer[0], offer[2]});
        }
        // dp[e + 1]: best value from positions 0..e. Either position e stays unclaimed
        // (carry dp[e] forward) or some segment [start, e, value] is claimed on
        // top of the optimum strictly before its start — reading dp[start]
        // is what keeps overlapping segments from being combined.
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
