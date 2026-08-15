import java.util.PriorityQueue;

class Solution {

    public int[] maxPoints(int[][] grid, int[] queries) {
        int m = grid.length,
            n = grid[0].length;
        int qlen = queries.length;
        Integer[] order = new Integer[qlen];
        for (int i = 0; i < qlen; i++) order[i] = i;
        java.util.Arrays.sort(order, (a, b) ->
            Integer.compare(queries[a], queries[b])
        );
        int[] answer = new int[qlen];
        boolean[][] visited = new boolean[m][n];
        visited[0][0] = true;
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) -> {
            if (a[0] != b[0]) return Integer.compare(a[0], b[0]);
            if (a[1] != b[1]) return Integer.compare(a[1], b[1]);
            return Integer.compare(a[2], b[2]);
        });
        heap.add(new int[] { grid[0][0], 0, 0 });
        int count = 0;
        int[] dr = { 1, -1, 0, 0 };
        int[] dc = { 0, 0, 1, -1 };
        for (int idx : order) {
            int q = queries[idx];
            while (!heap.isEmpty() && heap.peek()[0] < q) {
                int[] top = heap.poll();
                int r = top[1],
                    c = top[2];
                count += 1;
                for (int d = 0; d < 4; d++) {
                    int nr = r + dr[d],
                        nc = c + dc[d];
                    if (
                        0 <= nr &&
                        nr < m &&
                        0 <= nc &&
                        nc < n &&
                        !visited[nr][nc]
                    ) {
                        visited[nr][nc] = true;
                        heap.add(new int[] { grid[nr][nc], nr, nc });
                    }
                }
            }
            answer[idx] = count;
        }
        return answer;
    }
}
