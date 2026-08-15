class Solution {
  public:
    bool isBipartite(vector<vector<int>> &graph) {
        int n = graph.size();
        vector<int> color(n, 0);
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
                    if (color[v] == 0) {
                        color[v] = -color[u];
                        q.push(v);
                    } else if (color[v] == color[u]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
};
