class Solution {

    public long repairCars(int[] ranks, int cars) {
        long minRank = Long.MAX_VALUE;
        for (int r : ranks) {
            minRank = Math.min(minRank, r);
        }
        long lo = 1,
            hi = minRank * (long) cars * cars;
        while (lo < hi) {
            long mid = lo + (hi - lo) / 2;
            if (feasible(ranks, cars, mid)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

    private boolean feasible(int[] ranks, int cars, long t) {
        long total = 0;
        for (int r : ranks) {
            total += isqrt(t / r);
            if (total >= cars) {
                return true;
            }
        }
        return total >= cars;
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
