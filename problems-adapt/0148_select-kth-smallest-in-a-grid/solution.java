class Solution {

    public int selectKthSmallest(int[][] grid, int k) {
        int n = grid.length;
        long lo = grid[0][0],
            hi = grid[n - 1][n - 1];
        while (lo < hi) {
            long mid = lo + (hi - lo) / 2; // floor of (lo + hi) / 2
            if (countLe(grid, mid) >= k) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return (int) lo;
    }

    // Staircase walk from bottom-left: elements <= x.
    private long countLe(int[][] grid, long x) {
        int n = grid.length;
        long count = 0;
        int row = n - 1,
            col = 0;
        while (row >= 0 && col < n) {
            if (grid[row][col] <= x) {
                count += row + 1;
                col++;
            } else {
                row--;
            }
        }
        return count;
    }
}
