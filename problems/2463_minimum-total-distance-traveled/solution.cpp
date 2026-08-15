class Solution {
  public:
    long long minimumTotalDistance(vector<int> &robot, vector<vector<int>> &factory) {
        vector<int> rob = robot;
        sort(rob.begin(), rob.end());
        vector<pair<int, int>> fac;
        fac.reserve(factory.size());
        for (auto &f : factory) {
            fac.push_back({f[0], f[1]});
        }
        sort(fac.begin(), fac.end());
        int n = (int)rob.size();
        const long long INF = LLONG_MAX / 4;
        vector<long long> dp(n + 1, INF);
        dp[0] = 0;
        for (auto &fk : fac) {
            long long pos = fk.first;
            int limit = fk.second;
            vector<long long> pref(n + 1, 0);
            for (int i = 0; i < n; i++) {
                long long d = rob[i] - pos;
                pref[i + 1] = pref[i] + (d < 0 ? -d : d);
            }
            vector<long long> ndp = dp;
            for (int i = 1; i <= n; i++) {
                long long best = dp[i];
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
