import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {

    public long countDeluxe(long l, long r) {
        // Strictly increasing numbers draw digits from 1..9; strictly
        // decreasing ones from 0..9 with no leading zero. Enumerate every
        // nonempty digit subset once per direction and deduplicate.
        Set<Long> sleekSet = new HashSet<>();
        for (int mask = 1; mask < 1 << 9; mask++) {
            long num = 0;
            for (int d = 1; d <= 9; d++) {
                if ((mask & (1 << (d - 1))) != 0) num = num * 10 + d;
            }
            sleekSet.add(num);
        }
        for (int mask = 1; mask < 1 << 10; mask++) {
            long num = 0;
            for (int d = 9; d >= 0; d--) {
                if ((mask & (1 << d)) != 0) num = num * 10 + d;
            }
            if (num > 0) sleekSet.add(num);
        }
        List<Long> sleeks = new ArrayList<>(sleekSet);
        Collections.sort(sleeks);

        // sleek[s] == 1 when the integer s is itself strictly monotone;
        // those are exactly the sleek digit sums (s in [1, 144]).
        int[] sleek = new int[145];
        for (long g : sleekSet) {
            if (g <= 144) sleek[(int) g] = 1;
        }

        // overlap[i]: among sleeks[0..i), how many also have a sleek digit sum
        long[] overlap = new long[sleeks.size() + 1];
        for (int i = 0; i < sleeks.size(); i++) {
            overlap[i + 1] = overlap[i] + sleek[digitSum(sleeks.get(i))];
        }

        return countDeluxeUpTo(r, sleeks, sleek, overlap) - countDeluxeUpTo(l - 1, sleeks, sleek, overlap);
    }

    private long countDeluxeUpTo(long x, List<Long> sleeks, int[] sleek, long[] overlap) {
        // Deluxe = sleek digits OR sleek digit sum; subtract the sleeks whose
        // digit sum is also sleek (counted by both terms).
        return countSleekSum(x, sleek) + countSleek(x, sleeks) - countOverlap(x, sleeks, overlap);
    }

    private long countSleek(long x, List<Long> sleeks) {
        int lo = 0;
        int hi = sleeks.size();
        while (lo < hi) {
            int mid = (lo + hi) >>> 1;
            if (sleeks.get(mid) <= x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }

    private long countOverlap(long x, List<Long> sleeks, long[] overlap) {
        return overlap[(int) countSleek(x, sleeks)];
    }

    private long countSleekSum(long x, int[] sleek) {
        // Numbers in [1, x] whose digit sum is a sleek sum.
        if (x <= 0) return 0;
        String s = Long.toString(x);
        int n = s.length();
        // ways[k][t]: k free digits (0-9, leading zeros allowed) summing to
        // exactly t. Counts reach ~10^15, past 32 bits, so the table is long.
        long[][] ways = new long[n + 1][145];
        ways[0][0] = 1;
        for (int k = 1; k <= n; k++) {
            for (int t = 0; t <= 144; t++) {
                long total = 0;
                for (int d = 0; d <= 9; d++) {
                    if (t >= d) total += ways[k - 1][t - d];
                }
                ways[k][t] = total;
            }
        }
        long result = 0;
        int running = 0;
        for (int i = 0; i < n; i++) {
            int v = s.charAt(i) - '0';
            int k = n - i - 1;
            // A smaller digit here fixes the prefix; the tail is free.
            for (int d = 0; d < v; d++) {
                int base = running + d;
                int limit = Math.min(9 * k, 144 - base);
                for (int rem = 0; rem <= limit; rem++) {
                    if (sleek[base + rem] == 1) result += ways[k][rem];
                }
            }
            running += v;
        }
        if (sleek[running] == 1) result += 1;
        return result;
    }

    private int digitSum(long n) {
        int s = 0;
        while (n > 0) {
            s += n % 10;
            n /= 10;
        }
        return s;
    }
}
