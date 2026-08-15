import java.util.Arrays;

class Solution {

    public int numberOfBeautifulIntegers(int low, int high, int k) {
        return (int) (countUpTo(high, k) - countUpTo(low - 1, k));
    }

    private long countUpTo(long n, int k) {
        if (n <= 0) return 0;
        char[] chars = Long.toString(n).toCharArray();
        int len = chars.length;
        int[] digits = new int[len];
        for (int i = 0; i < len; i++) digits[i] = chars[i] - '0';
        // memo[pos][tight][started][balance+10][mod]
        long[][][][][] memo = new long[len + 1][2][2][21][k];
        for (long[][][][] a : memo) {
            for (long[][][] b : a) {
                for (long[][] c : b) {
                    for (long[] d : c) Arrays.fill(d, -1);
                }
            }
        }
        return dp(0, 1, 0, 0, 0, digits, k, memo);
    }

    private long dp(
        int pos,
        int tight,
        int started,
        int balance,
        int mod,
        int[] digits,
        int k,
        long[][][][][] memo
    ) {
        int len = digits.length;
        if (pos == len) {
            return started == 1 && balance == 0 && mod == 0 ? 1 : 0;
        }
        long cached = memo[pos][tight][started][balance + 10][mod];
        if (cached >= 0) return cached;
        int limit = tight == 1 ? digits[pos] : 9;
        long total = 0;
        for (int d = 0; d <= limit; d++) {
            int nextTight = tight == 1 && d == limit ? 1 : 0;
            if (started == 0 && d == 0) {
                total += dp(
                    pos + 1,
                    nextTight,
                    0,
                    balance,
                    (mod * 10 + d) % k,
                    digits,
                    k,
                    memo
                );
            } else {
                int newBalance = balance + (d % 2 == 1 ? 1 : -1);
                total += dp(
                    pos + 1,
                    nextTight,
                    1,
                    newBalance,
                    (mod * 10 + d) % k,
                    digits,
                    k,
                    memo
                );
            }
        }
        memo[pos][tight][started][balance + 10][mod] = total;
        return total;
    }
}
