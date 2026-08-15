class Solution {

    public int[] findPeakGrid(int[][] mat) {
        int m = mat.length,
            n = mat[0].length;
        int lo = 0,
            hi = m - 1;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            int[] row = mat[mid];
            int j = 0;
            for (int c = 1; c < n; c++) {
                if (row[c] > row[j]) j = c;
            }
            int up = mid > 0 ? mat[mid - 1][j] : -1;
            int down = mid < m - 1 ? mat[mid + 1][j] : -1;
            if (row[j] > up && row[j] > down) return new int[] { mid, j };
            if (up > row[j]) hi = mid - 1;
            else lo = mid + 1;
        }
        return new int[] {};
    }
}
