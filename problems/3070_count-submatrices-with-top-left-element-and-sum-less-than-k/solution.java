class Solution {

    public int countSubmatrices(int[][] grid, int k) {
        int rows = grid.length,
            cols = grid[0].length;
        long[] colSums = new long[cols];
        int count = 0;
        for (int i = 0; i < rows; i++) {
            long prefix = 0;
            for (int j = 0; j < cols; j++) {
                colSums[j] += grid[i][j];
                prefix += colSums[j];
                if (prefix > k) break;
                count++;
            }
        }
        return count;
    }
}
