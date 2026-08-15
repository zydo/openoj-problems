class Solution {
  public:
    long long minimumTime(vector<int> &power) {
        int n = power.size();
        int full = (1 << n) - 1;
        const long long INF = 1LL << 60;
        vector<long long> dp(full + 1, INF);
        dp[0] = 0;
        for (int mask = 0; mask <= full; mask++) {
            if (dp[mask] >= INF)
                continue;
            long long gain = __builtin_popcount(mask) + 1;
            for (int j = 0; j < n; j++) {
                if (!(mask & (1 << j))) {
                    long long days = ((long long)power[j] + gain - 1) / gain;
                    int nxt = mask | (1 << j);
                    if (dp[mask] + days < dp[nxt])
                        dp[nxt] = dp[mask] + days;
                }
            }
        }
        return dp[full];
    }
};
