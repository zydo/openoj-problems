class Solution {
  public:
    bool isBipartite(vector<vector<int>> &graph) {
        int n = graph.size();
        // 0 = uncolored, else +1/-1: bipartite iff a proper 2-coloring
        // exists, with each node's color forced by its distance parity
        // from the component root.
        vector<int> color(n, 0);
        // The graph may be disconnected: start a fresh BFS from every
        // still-uncolored node.
        for (int start = 0; start < n; start++) {
            if (color[start] != 0)
                continue;
            color[start] = 1;
            queue<int> q;
            q.push(start);
            while (!q.empty()) {
                int u = q.front();
                q.pop();
                for (int v : graph[u]) {
                    // Uncolored neighbor: take the opposite color.
                    if (color[v] == 0) {
                        color[v] = -color[u];
                        q.push(v);
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
};
