class Solution {

    public int dieSimulator(int n, int[] rollMax) {
        final long MOD = 1000000007L;
        long[][] dp = new long[6][16];
        for (int j = 0; j < 6; j++) dp[j][1] = 1;
        for (int step = 2; step <= n; step++) {
            long[][] nxt = new long[6][16];
            long[] totals = new long[6];
            long grand = 0;
            for (int j = 0; j < 6; j++) {
                for (int c = 0; c < 16; c++) totals[j] += dp[j][c];
                grand += totals[j];
            }
            for (int j = 0; j < 6; j++) {
                int limit = rollMax[j];
                for (int c = 2; c <= limit; c++) {
                    nxt[j][c] = dp[j][c - 1];
                }
                nxt[j][1] = (((grand - totals[j]) % MOD) + MOD) % MOD;
            }
            dp = nxt;
        }
        long answer = 0;
        for (int j = 0; j < 6; j++) {
            for (int c = 0; c < 16; c++) answer = (answer + dp[j][c]) % MOD;
        }
        return (int) answer;
    }
}
