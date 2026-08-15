class Solution {
  public:
    long long minimumCost(vector<int> &nums, vector<int> &cost, int k) {
        int n = (int)nums.size();
        vector<long long> prefNums(n + 1, 0), prefCost(n + 1, 0);
        for (int i = 0; i < n; i++) {
            prefNums[i + 1] = prefNums[i] + nums[i];
            prefCost[i + 1] = prefCost[i] + cost[i];
        }

        const long long INF = LLONG_MAX / 4;
        vector<long long> dp(n + 1, INF);
        dp[n] = 0;
        long long totalCost = prefCost[n];
        for (int i = n - 1; i >= 0; i--) {
            long long best = INF;
            for (int j = i; j < n; j++) {
                long long seg = prefNums[j + 1] * (prefCost[j + 1] - prefCost[i]);
                seg += (long long)k * (totalCost - prefCost[i]);
                long long cand = seg + dp[j + 1];
                if (cand < best)
                    best = cand;
            }
            dp[i] = best;
        }
        return dp[0];
    }
};
