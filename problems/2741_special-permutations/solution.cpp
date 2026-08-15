class Solution {
  public:
    int specialPerm(vector<int> &nums) {
        const int MOD = 1000000007;
        int n = nums.size();
        int size = 1 << n;
        vector<vector<int>> dp(size, vector<int>(n, 0));
        for (int i = 0; i < n; i++) {
            dp[1 << i][i] = 1;
        }
        for (int mask = 0; mask < size; mask++) {
            for (int last = 0; last < n; last++) {
                if (!((mask >> last) & 1)) {
                    continue;
                }
                int ways = dp[mask][last];
                if (ways == 0) {
                    continue;
                }
                for (int nxt = 0; nxt < n; nxt++) {
                    if ((mask >> nxt) & 1) {
                        continue;
                    }
                    if (nums[last] % nums[nxt] == 0 || nums[nxt] % nums[last] == 0) {
                        auto &t = dp[mask | (1 << nxt)];
                        t[nxt] = (t[nxt] + ways) % MOD;
                    }
                }
            }
        }
        int total = 0;
        for (int i = 0; i < n; i++) {
            total = (total + dp[size - 1][i]) % MOD;
        }
        return total;
    }
};
