class Solution {

    private int gcd(int a, int b) {
        while (b != 0) {
            int t = a % b;
            a = b;
            b = t;
        }
        return a;
    }

    public int distinctSequences(int n) {
        final int MOD = 1000000007;
        if (n == 1) return 6;
        long[][] dp = new long[7][7];
        for (int a = 1; a <= 6; a++) {
            for (int b = 1; b <= 6; b++) {
                if (a != b && gcd(a, b) == 1) dp[a][b] = 1;
            }
        }
        for (int len = 3; len <= n; len++) {
            long[][] ndp = new long[7][7];
            for (int a = 1; a <= 6; a++) {
                for (int b = 1; b <= 6; b++) {
                    long cnt = dp[a][b];
                    if (cnt == 0) continue;
                    for (int c = 1; c <= 6; c++) {
                        if (c != a && c != b && gcd(c, b) == 1) {
                            ndp[b][c] = (ndp[b][c] + cnt) % MOD;
                        }
                    }
                }
            }
            dp = ndp;
        }
        long total = 0;
        for (int a = 1; a <= 6; a++) {
            for (int b = 1; b <= 6; b++) total = (total + dp[a][b]) % MOD;
        }
        return (int) total;
    }
}
