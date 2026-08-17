class Solution {

    public boolean isBipartite(int[][] graph) {
        int n = graph.length;
        // 0 = uncolored, else +1/-1: bipartite iff a proper 2-coloring
        // exists, with each node's color forced by its distance parity
        // from the component root.
        int[] color = new int[n];
        // The graph may be disconnected: start a fresh BFS from every
        // still-uncolored node.
        for (int start = 0; start < n; start++) {
            if (color[start] != 0) continue;
            color[start] = 1;
            java.util.ArrayDeque<Integer> queue = new java.util.ArrayDeque<>();
            queue.add(start);
            while (!queue.isEmpty()) {
                int u = queue.poll();
                for (int v : graph[u]) {
                    // Uncolored neighbor: take the opposite color.
                    if (color[v] == 0) {
                        color[v] = -color[u];
                        queue.add(v);
                    } else if (color[v] == color[u]) {
                        // Same-color edge = odd cycle, the sole
                        // obstruction to bipartiteness.
                        return false;
                    }
                }
            }
        }
        // Every component colored cleanly: the two color classes are
        // the required partition.
        return true;
    }
}
