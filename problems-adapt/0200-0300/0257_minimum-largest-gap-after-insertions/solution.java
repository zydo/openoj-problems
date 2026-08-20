class Solution {

    public double minimumLargestGap(int[] positions, int k) {
        int m = positions.length - 1;
        double[] gaps = new double[m];
        for (int i = 0; i < m; i++) {
            gaps[i] = (double) (positions[i + 1] - positions[i]);
        }
        double lo = 0.0;
        double hi = gaps[0];
        for (int i = 1; i < m; i++) hi = Math.max(hi, gaps[i]);
        // Binary search the smallest feasible maximum distance.
        for (int it = 0; it < 60; it++) {
            double mid = (lo + hi) / 2.0;
            if (mid <= 0.0) {
                hi = 0.0;
                break;
            }
            long needed = 0;
            for (double g : gaps) {
                needed += (long) Math.ceil(g / mid) - 1;
            }
            if (needed <= k) {
                hi = mid;
            } else {
                lo = mid;
            }
        }
        return hi;
    }
}
