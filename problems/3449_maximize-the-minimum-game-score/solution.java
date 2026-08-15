class Solution {

    public long maxScore(int[] points, int m) {
        int n = points.length;

        long lo = 0,
            hi = 0;
        for (int p : points) hi = Math.max(hi, (long) p * m);
        while (lo < hi) {
            long mid = lo + (hi - lo + 1) / 2;
            if (feasible(points, m, mid)) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }

    private boolean feasible(int[] points, long m, long target) {
        int n = points.length;
        long moves = 0;
        long prev = 0;
        for (int i = 0; i < n; i++) {
            long gp = points[i];
            long remain = (target + gp - 1) / gp - prev;
            if (remain >= 1) {
                prev = remain - 1;
                moves += 2 * remain - 1;
            } else if (i != n - 1) {
                prev = 0;
                moves += 1;
            }
            if (moves > m) {
                return false;
            }
        }
        return moves <= m;
    }
}
