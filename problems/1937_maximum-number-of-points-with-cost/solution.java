class Solution {

    public long maxPoints(int[][] points) {
        int m = points.length;
        int n = points[0].length;
        long[] prev = new long[n];
        for (int c = 0; c < n; c++) prev[c] = points[0][c];
        long[] left = new long[n];
        long[] right = new long[n];
        for (int r = 1; r < m; r++) {
            long best = prev[0] + 0;
            for (int c = 0; c < n; c++) {
                if (prev[c] + c > best) best = prev[c] + c;
                left[c] = best;
            }
            best = prev[n - 1] - (n - 1);
            for (int c = n - 1; c >= 0; c--) {
                if (prev[c] - c > best) best = prev[c] - c;
                right[c] = best;
            }
            for (int c = 0; c < n; c++) {
                long l = left[c] - c;
                long rr = right[c] + c;
                prev[c] = points[r][c] + (l > rr ? l : rr);
            }
        }
        long ans = prev[0];
        for (int c = 1; c < n; c++) {
            if (prev[c] > ans) ans = prev[c];
        }
        return ans;
    }
}
