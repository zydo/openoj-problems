class Solution {
  public:
    int distinctSequences(int n) {
        const long long MOD = 1000000007LL;
        if (n == 1)
            return 6;
        static long long dp[7][7], ndp[7][7];
        memset(dp, 0, sizeof(dp));
        for (int a = 1; a <= 6; a++) {
            for (int b = 1; b <= 6; b++) {
                if (a != b && gcd(a, b) == 1)
                    dp[a][b] = 1;
            }
        }
        for (int len = 3; len <= n; len++) {
            memset(ndp, 0, sizeof(ndp));
            for (int a = 1; a <= 6; a++) {
                for (int b = 1; b <= 6; b++) {
                    long long cnt = dp[a][b];
                    if (cnt == 0)
                        continue;
                    for (int c = 1; c <= 6; c++) {
                        if (c != a && c != b && gcd(c, b) == 1) {
                            ndp[b][c] = (ndp[b][c] + cnt) % MOD;
                        }
                    }
                }
            }
            memcpy(dp, ndp, sizeof(dp));
        }
        long long total = 0;
        for (int a = 1; a <= 6; a++) {
            for (int b = 1; b <= 6; b++)
                total = (total + dp[a][b]) % MOD;
        }
        return (int)total;
    }
};
