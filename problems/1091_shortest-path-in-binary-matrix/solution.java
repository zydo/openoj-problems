import java.util.ArrayDeque;
import java.util.Queue;

class Solution {

    public int shortestPathBinaryMatrix(int[][] grid) {
        int n = grid.length;
        if (grid[0][0] != 0 || grid[n - 1][n - 1] != 0) {
            return -1;
        }
        if (n == 1) {
            return 1;
        }
        int[][] dist = new int[n][n];
        Queue<int[]> queue = new ArrayDeque<>();
        dist[0][0] = 1;
        queue.offer(new int[] { 0, 0 });
        int[][] moves = {
            { -1, -1 },
            { -1, 0 },
            { -1, 1 },
            { 0, -1 },
            { 0, 1 },
            { 1, -1 },
            { 1, 0 },
            { 1, 1 },
        };
        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int x = cur[0],
                y = cur[1];
            for (int[] m : moves) {
                int nx = x + m[0],
                    ny = y + m[1];
                if (
                    nx >= 0 &&
                    nx < n &&
                    ny >= 0 &&
                    ny < n &&
                    grid[nx][ny] == 0 &&
                    dist[nx][ny] == 0
                ) {
                    if (nx == n - 1 && ny == n - 1) {
                        return dist[x][y] + 1;
                    }
                    dist[nx][ny] = dist[x][y] + 1;
                    queue.offer(new int[] { nx, ny });
                }
            }
        }
        return -1;
    }
}
