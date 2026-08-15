class Solution {
  public:
    int distinctSubseqII(string s) {
        const long long MOD = 1000000007LL;
        int n = s.size();
        vector<long long> dp(n + 1);
        dp[0] = 1;
        int last[26];
        fill(begin(last), end(last), -1);
        for (int i = 1; i <= n; i++) {
            int c = s[i - 1] - 'a';
            dp[i] = dp[i - 1] * 2 % MOD;
            if (last[c] >= 0) {
                dp[i] = (dp[i] - dp[last[c]] + MOD) % MOD;
            }
            last[c] = i - 1;
        }
        return (int)((dp[n] - 1 + MOD) % MOD);
    }
};
