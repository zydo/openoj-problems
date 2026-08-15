class Solution {

    public String findSpecialNodes(int n, int[][] edges) {
        int[] deg = new int[n];
        for (int[] e : edges) {
            deg[e[0]]++;
            deg[e[1]]++;
        }
        int[][] adj = new int[n][];
        for (int i = 0; i < n; i++) {
            adj[i] = new int[deg[i]];
        }
        int[] fill = new int[n];
        for (int[] e : edges) {
            adj[e[0]][fill[e[0]]++] = e[1];
            adj[e[1]][fill[e[1]]++] = e[0];
        }

        boolean[] oneEnd = bfs(n, adj, 0);
        int first = 0;
        for (int i = 0; i < n; i++) {
            if (oneEnd[i]) {
                first = i;
                break;
            }
        }
        boolean[] otherEnd = bfs(n, adj, first);

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            sb.append(oneEnd[i] || otherEnd[i] ? '1' : '0');
        }
        return sb.toString();
    }

    private boolean[] bfs(int n, int[][] adj, int src) {
        int[] dist = new int[n];
        java.util.Arrays.fill(dist, -1);
        dist[src] = 0;
        int[] queue = new int[n];
        int head = 0,
            tail = 0;
        queue[tail++] = src;
        int far = 0;
        while (head < tail) {
            int u = queue[head++];
            for (int v : adj[u]) {
                if (dist[v] == -1) {
                    dist[v] = dist[u] + 1;
                    if (dist[v] > far) {
                        far = dist[v];
                    }
                    queue[tail++] = v;
                }
            }
        }
        boolean[] res = new boolean[n];
        for (int i = 0; i < n; i++) {
            res[i] = dist[i] == far;
        }
        return res;
    }
}
