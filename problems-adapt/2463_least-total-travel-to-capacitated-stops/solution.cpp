class Solution {
  public:
    long long leastTotalTravel(vector<int> &units, vector<vector<int>> &stations) {
        vector<int> rob = units;
        sort(rob.begin(), rob.end());
        vector<pair<int, int>> fac;
        fac.reserve(stations.size());
        for (auto &f : stations) {
            fac.push_back({f[0], f[1]});
        }
        sort(fac.begin(), fac.end());
        // Optimal plans are non-crossing (triangle inequality), so after
        // sorting, each station serves a contiguous block of units in order.
        int n = (int)rob.size();
        const long long INF = LLONG_MAX / 4;
        // dp[i] = min distance to serve the first i units with the
        // stations processed so far; only i = 0 is reachable initially.
        vector<long long> dp(n + 1, INF);
        dp[0] = 0;
        for (auto &fk : fac) {
            long long pos = fk.first;
            int limit = fk.second;
            // pref[i] = sum of |units[j] - pos| for j < i: prefix differences
            // give any contiguous block's distance to this station.
            vector<long long> pref(n + 1, 0);
            for (int i = 0; i < n; i++) {
                long long d = rob[i] - pos;
                pref[i + 1] = pref[i] + (d < 0 ? -d : d);
            }
            vector<long long> ndp = dp;
            for (int i = 1; i <= n; i++) {
                // dp[i] carried over = skip this station (zero assignments).
                long long best = dp[i];
                // This station absorbs the trailing t units i-t..i-1.
                int maxT = min(limit, i);
                for (int t = 1; t <= maxT; t++) {
                    if (dp[i - t] == INF) {
                        continue;
                    }
                    long long val = dp[i - t] + pref[i] - pref[i - t];
                    if (val < best) {
                        best = val;
                    }
                }
                ndp[i] = best;
            }
            dp = ndp;
        }
        return dp[n];
    }
};
