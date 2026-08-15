class Solution {

    public int closedIsland(int[][] grid) {
        int rows = grid.length,
            cols = grid[0].length;
        int[] dr = { 1, -1, 0, 0 };
        int[] dc = { 0, 0, 1, -1 };
        int count = 0;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == 0) {
                    if (flood(grid, r, c, rows, cols, dr, dc)) count++;
                }
            }
        }
        return count;
    }

    private boolean flood(
        int[][] grid,
        int r,
        int c,
        int rows,
        int cols,
        int[] dr,
        int[] dc
    ) {
        java.util.ArrayDeque<int[]> stack = new java.util.ArrayDeque<>();
        grid[r][c] = 1;
        stack.push(new int[] { r, c });
        boolean closed = true;
        while (!stack.isEmpty()) {
            int[] cell = stack.pop();
            for (int d = 0; d < 4; d++) {
                int nx = cell[0] + dr[d],
                    ny = cell[1] + dc[d];
                if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
                    if (grid[nx][ny] == 0) {
                        grid[nx][ny] = 1;
                        stack.push(new int[] { nx, ny });
                    }
                } else {
                    closed = false;
                }
            }
        }
        return closed;
    }
}
