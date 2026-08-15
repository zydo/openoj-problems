class Solution {

    public int minDays(int[] bloomDay, int m, int k) {
        int n = bloomDay.length;
        if ((long) m * k > n) {
            return -1;
        }
        int lo = Integer.MAX_VALUE;
        int hi = Integer.MIN_VALUE;
        for (int d : bloomDay) {
            if (d < lo) {
                lo = d;
            }
            if (d > hi) {
                hi = d;
            }
        }
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (feasible(bloomDay, mid, k, m)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

    private boolean feasible(int[] bloomDay, int day, int k, int m) {
        int bouquets = 0;
        int run = 0;
        for (int d : bloomDay) {
            if (d <= day) {
                run++;
                if (run == k) {
                    bouquets++;
                    run = 0;
                }
            } else {
                run = 0;
            }
        }
        return bouquets >= m;
    }
}
