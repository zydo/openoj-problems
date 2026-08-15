import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

class Solution {

    public int treeDiameter(int[][] edges) {
        if (edges.length == 0) return 0;
        int n = edges.length + 1;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for (int[] e : edges) {
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }

        int far = bfs(0, adj)[0];
        return bfs(far, adj)[1];
    }

    private int[] bfs(int src, List<List<Integer>> adj) {
        int n = adj.size();
        int[] dist = new int[n];
        java.util.Arrays.fill(dist, -1);
        dist[src] = 0;
        Deque<Integer> queue = new ArrayDeque<>();
        queue.add(src);
        int far = src;
        while (!queue.isEmpty()) {
            int u = queue.poll();
            for (int v : adj.get(u)) {
                if (dist[v] < 0) {
                    dist[v] = dist[u] + 1;
                    queue.add(v);
                    if (dist[v] > dist[far]) far = v;
                }
            }
        }
        return new int[] { far, dist[far] };
    }
}
