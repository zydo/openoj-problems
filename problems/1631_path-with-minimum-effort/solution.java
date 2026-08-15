import java.util.PriorityQueue;

class Solution {

    public int minimumEffortPath(int[][] heights) {
        int rows = heights.length;
        int cols = heights[0].length;
        int[][] dist = new int[rows][cols];
        for (int[] row : dist) {
            java.util.Arrays.fill(row, Integer.MAX_VALUE);
        }
        dist[0][0] = 0;
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) ->
            Integer.compare(a[0], b[0])
        );
        heap.offer(new int[] { 0, 0, 0 });
        int[][] dirs = { { 1, 0 }, { -1, 0 }, { 0, 1 }, { 0, -1 } };
        while (!heap.isEmpty()) {
            int[] cur = heap.poll();
            int d = cur[0],
                r = cur[1],
                c = cur[2];
            if (r == rows - 1 && c == cols - 1) {
                return d;
            }
            if (d > dist[r][c]) {
                continue;
            }
            for (int[] dir : dirs) {
                int nr = r + dir[0];
                int nc = c + dir[1];
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                    int nd = Math.max(
                        d,
                        Math.abs(heights[nr][nc] - heights[r][c])
                    );
                    if (nd < dist[nr][nc]) {
                        dist[nr][nc] = nd;
                        heap.offer(new int[] { nd, nr, nc });
                    }
                }
            }
        }
        return 0;
    }
}
