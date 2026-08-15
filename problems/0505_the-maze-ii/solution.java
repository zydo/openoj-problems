import java.util.*;

class Solution {

    public int shortestDistance(int[][] maze, int[] start, int[] destination) {
        int m = maze.length,
            n = maze[0].length;
        int[][] dist = new int[m][n];
        for (int[] row : dist) Arrays.fill(row, -1);
        // min-heap of [d, r, c]
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) ->
            Integer.compare(a[0], b[0])
        );
        dist[start[0]][start[1]] = 0;
        heap.add(new int[] { 0, start[0], start[1] });
        int[][] dirs = { { 1, 0 }, { -1, 0 }, { 0, 1 }, { 0, -1 } };
        while (!heap.isEmpty()) {
            int[] top = heap.poll();
            int d = top[0],
                r = top[1],
                c = top[2];
            if (r == destination[0] && c == destination[1]) return d;
            if (d > dist[r][c]) continue;
            for (int[] dir : dirs) {
                int dr = dir[0],
                    dc = dir[1];
                int nr = r,
                    nc = c,
                    steps = 0;
                while (
                    nr + dr >= 0 &&
                    nr + dr < m &&
                    nc + dc >= 0 &&
                    nc + dc < n &&
                    maze[nr + dr][nc + dc] == 0
                ) {
                    nr += dr;
                    nc += dc;
                    steps++;
                }
                if (steps > 0) {
                    int nd = d + steps;
                    if (dist[nr][nc] == -1 || nd < dist[nr][nc]) {
                        dist[nr][nc] = nd;
                        heap.add(new int[] { nd, nr, nc });
                    }
                }
            }
        }
        return -1;
    }
}
