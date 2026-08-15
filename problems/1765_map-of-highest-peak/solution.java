import java.util.ArrayDeque;
import java.util.Queue;

class Solution {

    public int[][] highestPeak(int[][] isWater) {
        int m = isWater.length,
            n = isWater[0].length;
        int[][] height = new int[m][n];
        for (int[] row : height) java.util.Arrays.fill(row, -1);
        Queue<int[]> q = new ArrayDeque<>();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (isWater[i][j] == 1) {
                    height[i][j] = 0;
                    q.offer(new int[] { i, j });
                }
            }
        }
        int[][] dirs = { { 1, 0 }, { -1, 0 }, { 0, 1 }, { 0, -1 } };
        while (!q.isEmpty()) {
            int[] cur = q.poll();
            int i = cur[0],
                j = cur[1];
            for (int[] d : dirs) {
                int ni = i + d[0],
                    nj = j + d[1];
                if (
                    ni >= 0 &&
                    ni < m &&
                    nj >= 0 &&
                    nj < n &&
                    height[ni][nj] == -1
                ) {
                    height[ni][nj] = height[i][j] + 1;
                    q.offer(new int[] { ni, nj });
                }
            }
        }
        return height;
    }
}
