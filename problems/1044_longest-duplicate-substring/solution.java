import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public String longestDupSubstring(String s) {
        int n = s.length();
        long[] a = new long[n];
        for (int i = 0; i < n; i++) a[i] = s.charAt(i) - 'a';
        final long MOD1 = 1000000007L;
        final long MOD2 = 1000000009L;
        final long BASE = 26;

        long[] pow1 = new long[n + 1];
        long[] pow2 = new long[n + 1];
        pow1[0] = 1;
        pow2[0] = 1;
        for (int i = 1; i <= n; i++) {
            pow1[i] = (pow1[i - 1] * BASE) % MOD1;
            pow2[i] = (pow2[i - 1] * BASE) % MOD2;
        }

        long mul1 = MOD2 + 7;

        int lo = 1,
            hi = n;
        int bestLength = 0,
            bestStart = -1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            int idx = check(s, a, n, mid, pow1, pow2, MOD1, MOD2, BASE, mul1);
            if (idx != -1) {
                bestLength = mid;
                bestStart = idx;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        if (bestLength == 0) return "";
        return s.substring(bestStart, bestStart + bestLength);
    }

    private int check(
        String s,
        long[] a,
        int n,
        int length,
        long[] pow1,
        long[] pow2,
        long MOD1,
        long MOD2,
        long BASE,
        long mul1
    ) {
        if (length == 0) return -1;
        long h1 = 0,
            h2 = 0;
        for (int i = 0; i < length; i++) {
            h1 = (h1 * BASE + a[i]) % MOD1;
            h2 = (h2 * BASE + a[i]) % MOD2;
        }
        Map<Long, List<Integer>> seen = new HashMap<>();
        seen.computeIfAbsent(h1 * mul1 + h2, k -> new ArrayList<>()).add(0);
        for (int i = 1; i + length <= n; i++) {
            long t1 = (h1 - a[i - 1] * pow1[length - 1]) % MOD1;
            if (t1 < 0) t1 += MOD1;
            h1 = (t1 * BASE + a[i + length - 1]) % MOD1;
            long t2 = (h2 - a[i - 1] * pow2[length - 1]) % MOD2;
            if (t2 < 0) t2 += MOD2;
            h2 = (t2 * BASE + a[i + length - 1]) % MOD2;
            long key = h1 * mul1 + h2;
            List<Integer> starts = seen.get(key);
            if (starts != null) {
                boolean matched = false;
                for (int st : starts) {
                    boolean eq = true;
                    for (int t = 0; t < length; t++) {
                        if (a[st + t] != a[i + t]) {
                            eq = false;
                            break;
                        }
                    }
                    if (eq) {
                        matched = true;
                        break;
                    }
                }
                if (matched) return i;
                starts.add(i);
            } else {
                List<Integer> lst = new ArrayList<>();
                lst.add(i);
                seen.put(key, lst);
            }
        }
        return -1;
    }
}
