import java.util.ArrayDeque;
import java.util.Queue;

class Solution {

    public int maxDistance(int[][] grid) {
        int n = grid.length;
        int[][] g = new int[n][n];
        for (int i = 0; i < n; i++) {
            g[i] = grid[i].clone();
        }
        Queue<int[]> queue = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (g[i][j] == 1) {
                    queue.add(new int[] { i, j });
                }
            }
        }
        if (queue.isEmpty() || queue.size() == n * n) {
            return -1;
        }
        int dist = 0;
        int[] di = { 1, -1, 0, 0 };
        int[] dj = { 0, 0, 1, -1 };
        while (!queue.isEmpty()) {
            dist++;
            for (int sz = queue.size(); sz > 0; sz--) {
                int[] cell = queue.poll();
                for (int d = 0; d < 4; d++) {
                    int ni = cell[0] + di[d];
                    int nj = cell[1] + dj[d];
                    if (
                        ni >= 0 && ni < n && nj >= 0 && nj < n && g[ni][nj] == 0
                    ) {
                        g[ni][nj] = 1;
                        queue.add(new int[] { ni, nj });
                    }
                }
            }
        }
        return dist - 1;
    }
}
