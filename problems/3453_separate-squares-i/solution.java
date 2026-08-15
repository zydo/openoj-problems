class Solution {

    public double separateSquares(int[][] squares) {
        long total = 0; // exact integer accumulation (mirrors Python's int sum)
        long hiTop = Long.MIN_VALUE;
        for (int[] sq : squares) {
            long l = sq[2];
            total += l * l;
            long top = sq[1] + l;
            if (top > hiTop) hiTop = top;
        }
        double target = (double) total / 2.0;
        double lo = 0.0;
        double hi = (double) hiTop;
        for (int it = 0; it < 60; it++) {
            double mid = (lo + hi) / 2.0;
            double below = 0.0;
            for (int[] sq : squares) {
                long y = sq[1];
                long l = sq[2];
                if (mid <= y) continue;
                long top = y + l;
                double m = mid < top ? mid : (double) top; // min(mid, y + l)
                below += (m - y) * l;
            }
            if (below >= target) hi = mid;
            else lo = mid;
        }
        return hi;
    }
}
