class Solution {

    public long leastTime(int[] factors, int jobs) {
        long minRank = Long.MAX_VALUE;
        for (int r : factors) {
            minRank = Math.min(minRank, r);
        }
        // Feasibility is monotone in t (mechanics can idle), so binary search
        // the minimum feasible time. Upper bound: the best mechanic repairing
        // every car alone, min(factors) * jobs^2.
        long lo = 1,
            hi = minRank * (long) jobs * jobs;
        while (lo < hi) {
            long mid = lo + (hi - lo) / 2;
            if (feasible(factors, jobs, mid)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

    private boolean feasible(int[] factors, int jobs, long t) {
        // Within budget t, a rank-r mechanic finishes r*n^2 <= t jobs, so its
        // capacity is isqrt(t / r); the check sums capacities and exits early
        // once the demand is covered.
        long total = 0;
        for (int r : factors) {
            total += isqrt(t / r);
            if (total >= jobs) {
                return true;
            }
        }
        return total >= jobs;
    }

    private static long isqrt(long x) {
        long r = (long) Math.sqrt((double) x);
        while (r > 0 && r * r > x) {
            r--;
        }
        while ((r + 1) * (r + 1) <= x) {
            r++;
        }
        return r;
    }
}
