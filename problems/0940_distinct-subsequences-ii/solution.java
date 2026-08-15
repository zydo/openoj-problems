class Solution {

    public int distinctSubseqII(String s) {
        final int MOD = 1_000_000_007;
        int n = s.length();
        long[] dp = new long[n + 1];
        dp[0] = 1;
        int[] last = new int[26];
        java.util.Arrays.fill(last, -1);
        for (int i = 1; i <= n; i++) {
            int c = s.charAt(i - 1) - 'a';
            dp[i] = (dp[i - 1] * 2) % MOD;
            if (last[c] >= 0) {
                dp[i] = (dp[i] - dp[last[c]] + MOD) % MOD;
            }
            last[c] = i - 1;
        }
        return (int) ((dp[n] - 1 + MOD) % MOD);
    }
}
