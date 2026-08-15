import java.util.HashMap;
import java.util.Map;

class Solution {

    public int beautifulNumbers(int l, int r) {
        return (int) (count(r) - count(l - 1));
    }

    private long count(long x) {
        if (x <= 0) {
            return 0;
        }
        String s = Long.toString(x);
        int[] digits = new int[s.length()];
        for (int i = 0; i < s.length(); i++) {
            digits[i] = s.charAt(i) - '0';
        }
        Map<Long, Long> memo = new HashMap<>();
        return dp(digits, memo, 0, true, false, 0, 1);
    }

    private long dp(
        int[] digits,
        Map<Long, Long> memo,
        int pos,
        boolean tight,
        boolean started,
        int ssum,
        long prod
    ) {
        if (pos == digits.length) {
            return started && ssum > 0 && prod % ssum == 0 ? 1 : 0;
        }
        long key = pack(pos, tight, started, ssum, prod);
        Long cached = memo.get(key);
        if (cached != null) {
            return cached;
        }
        int limit = tight ? digits[pos] : 9;
        long res = 0;
        for (int d = 0; d <= limit; d++) {
            boolean nt = tight && d == limit;
            if (!started && d == 0) {
                res += dp(digits, memo, pos + 1, nt, false, 0, 1);
            } else {
                res += dp(digits, memo, pos + 1, nt, true, ssum + d, prod * d);
            }
        }
        memo.put(key, res);
        return res;
    }

    private long pack(
        int pos,
        boolean tight,
        boolean started,
        int ssum,
        long prod
    ) {
        // pos <= 9 (4 bits), tight (1), started (1), ssum <= 90 (7 bits), prod <= 9^10 < 2^32
        long head =
            (((long) pos * 2 + (tight ? 1 : 0)) * 2 + (started ? 1 : 0)) * 128 +
            ssum;
        return head * (1L << 32) + prod;
    }
}
