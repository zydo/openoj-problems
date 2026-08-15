import java.util.*;

class Solution {

    public int[] shortestAlternatingPaths(
        int n,
        int[][] redEdges,
        int[][] blueEdges
    ) {
        // adjacency[c][u] lists endpoints of color-c edges from u.
        List<List<Integer>>[] adjacency = new List[] {
            new ArrayList<>(),
            new ArrayList<>(),
        };
        for (int c = 0; c < 2; c++) {
            for (int u = 0; u < n; u++) {
                adjacency[c].add(new ArrayList<>());
            }
        }
        for (int[] edge : redEdges) {
            adjacency[0].get(edge[0]).add(edge[1]);
        }
        for (int[] edge : blueEdges) {
            adjacency[1].get(edge[0]).add(edge[1]);
        }

        int INF = Integer.MAX_VALUE;
        int[][] dist = new int[n][2];
        for (int i = 0; i < n; i++) {
            dist[i][0] = INF;
            dist[i][1] = INF;
        }
        dist[0][0] = 0; // arrived at 0 via a red edge (virtual start)
        dist[0][1] = 0;
        int[] answer = new int[n];
        Arrays.fill(answer, -1);
        answer[0] = 0;
        Deque<int[]> queue = new ArrayDeque<>();
        queue.offer(new int[] { 0, 0 });
        queue.offer(new int[] { 0, 1 });
        while (!queue.isEmpty()) {
            int[] top = queue.poll();
            int node = top[0];
            int color = top[1];
            for (int nxt : adjacency[1 - color].get(node)) {
                if (dist[nxt][1 - color] == INF) {
                    dist[nxt][1 - color] = dist[node][color] + 1;
                    int value = dist[nxt][1 - color];
                    answer[nxt] =
                        answer[nxt] == -1
                            ? value
                            : Math.min(answer[nxt], value);
                    queue.offer(new int[] { nxt, 1 - color });
                }
            }
        }
        return answer;
    }
}
