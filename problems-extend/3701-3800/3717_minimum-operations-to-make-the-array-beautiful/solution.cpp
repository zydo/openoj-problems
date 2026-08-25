class Solution {
  public:
    int minOperations(vector<int> &nums) {
        // Position 0 is frozen, so every later value is a multiple of the
        // one before it. Cap the value axis at 2 * max(nums): no optimal
        // chain ever needs a value above that (exchange argument in
        // solutions.md).
        int n = nums.size();
        if (n == 1) {
            return 0;
        }
        int cap = 2 * *max_element(nums.begin(), nums.end());
        const int INF = 1e9;
        vector<int> dp(cap + 1, INF), ndp(cap + 1);
        dp[nums[0]] = 0;
        for (int i = 1; i < n; i++) {
            int x = nums[i];
            fill(ndp.begin(), ndp.end(), INF);
            for (int u = 1; u <= cap; u++) {
                if (dp[u] >= INF) {
                    continue;
                }
                // First multiple of u reaching x, then every multiple after.
                int start = ((x + u - 1) / u) * u;
                for (int v = start; v <= cap; v += u) {
                    int cand = dp[u] + (v - x);
                    if (cand < ndp[v]) {
                        ndp[v] = cand;
                    }
                }
            }
            dp.swap(ndp);
        }
        return *min_element(dp.begin(), dp.end());
    }
};
