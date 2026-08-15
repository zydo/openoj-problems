class Solution {

    public int matrixMedian(int[][] grid) {
        int m = grid.length,
            n = grid[0].length;
        int need = (m * n) / 2 + 1;
        int lo = Integer.MAX_VALUE,
            hi = Integer.MIN_VALUE;
        for (int[] row : grid) {
            lo = Math.min(lo, row[0]);
            hi = Math.max(hi, row[n - 1]);
        }
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (countLe(grid, mid) >= need) hi = mid;
            else lo = mid + 1;
        }
        return lo;
    }

    private long countLe(int[][] grid, int x) {
        long total = 0;
        for (int[] row : grid) {
            int a = 0,
                b = row.length;
            while (a < b) {
                int mid = (a + b) >>> 1;
                if (row[mid] <= x) a = mid + 1;
                else b = mid;
            }
            total += a;
        }
        return total;
    }
}
