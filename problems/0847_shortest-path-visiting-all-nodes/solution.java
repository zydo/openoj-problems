import java.util.ArrayDeque;
import java.util.Queue;

class Solution {

    public int shortestPathLength(int[][] graph) {
        int n = graph.length;
        int full = (1 << n) - 1;
        int[][] dist = new int[n][1 << n];
        for (int i = 0; i < n; i++) {
            java.util.Arrays.fill(dist[i], -1);
        }
        Queue<int[]> queue = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            dist[i][1 << i] = 0;
            queue.add(new int[] { i, 1 << i });
        }
        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int node = cur[0],
                mask = cur[1];
            if (mask == full) {
                return dist[node][mask];
            }
            for (int nxt : graph[node]) {
                int nmask = mask | (1 << nxt);
                if (dist[nxt][nmask] == -1) {
                    dist[nxt][nmask] = dist[node][mask] + 1;
                    queue.add(new int[] { nxt, nmask });
                }
            }
        }
        return 0;
    }
}
