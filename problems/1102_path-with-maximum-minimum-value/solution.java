import java.util.*;

class Solution {

    public int maximumMinimumPath(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        // Max-heap on the cell value.
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) -> b[0] - a[0]);
        boolean[][] visited = new boolean[rows][cols];
        visited[0][0] = true;
        heap.offer(new int[] { grid[0][0], 0, 0 });
        int best = grid[0][0];
        int[][] dirs = { { 1, 0 }, { -1, 0 }, { 0, 1 }, { 0, -1 } };
        while (!heap.isEmpty()) {
            int[] top = heap.poll();
            int value = top[0];
            int r = top[1];
            int c = top[2];
            best = Math.min(best, value);
            if (r == rows - 1 && c == cols - 1) {
                return best;
            }
            for (int[] dir : dirs) {
                int nr = r + dir[0];
                int nc = c + dir[1];
                if (
                    nr >= 0 &&
                    nr < rows &&
                    nc >= 0 &&
                    nc < cols &&
                    !visited[nr][nc]
                ) {
                    visited[nr][nc] = true;
                    heap.offer(new int[] { grid[nr][nc], nr, nc });
                }
            }
        }
        return best;
    }
}
