class Solution {

    public int earliestDay(int[] openDay, int m, int k) {
        int n = openDay.length;
        // Not enough flowers to ever build m bouquets of k flowers each.
        if ((long) m * k > n) {
            return -1;
        }
        int lo = Integer.MAX_VALUE;
        int hi = Integer.MIN_VALUE;
        for (int d : openDay) {
            if (d < lo) {
                lo = d;
            }
            if (d > hi) {
                hi = d;
            }
        }
        // Feasibility is monotone in the day (blooming only adds flowers), so
        // binary search the first feasible day between the extreme bloom days:
        // no flower opens before the first, and all are open by the last.
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (feasible(openDay, mid, k, m)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

    private boolean feasible(int[] openDay, int day, int k, int m) {
        int bouquets = 0;
        // Length of the current run of consecutive bloomed flowers.
        int run = 0;
        for (int d : openDay) {
            if (d <= day) {
                run++;
                if (run == k) {
                    // A full run completes one bouquet; reset the run.
                    bouquets++;
                    run = 0;
                }
            } else {
                // Bouquets cannot span an unbloomed flower.
                run = 0;
            }
        }
        return bouquets >= m;
    }
}
