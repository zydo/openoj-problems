import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int[][] wallsAndGates(int[][] rooms) {
        int m = rooms.length;
        int n = rooms[0].length;
        final int INF = 2147483647;
        Deque<int[]> queue = new ArrayDeque<>();
        for (int r = 0; r < m; r++) {
            for (int c = 0; c < n; c++) {
                if (rooms[r][c] == 0) {
                    queue.offer(new int[] { r, c });
                }
            }
        }
        int[][] dirs = { { 1, 0 }, { -1, 0 }, { 0, 1 }, { 0, -1 } };
        int dist = 0;
        while (!queue.isEmpty()) {
            dist++;
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int[] cur = queue.poll();
                for (int[] d : dirs) {
                    int nr = cur[0] + d[0];
                    int nc = cur[1] + d[1];
                    if (
                        nr >= 0 &&
                        nr < m &&
                        nc >= 0 &&
                        nc < n &&
                        rooms[nr][nc] == INF
                    ) {
                        rooms[nr][nc] = dist;
                        queue.offer(new int[] { nr, nc });
                    }
                }
            }
        }
        return rooms;
    }
}
