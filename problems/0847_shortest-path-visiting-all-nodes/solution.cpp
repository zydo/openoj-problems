class Solution {
  public:
    int shortestPathLength(vector<vector<int>> &graph) {
        int n = graph.size();
        int full = (1 << n) - 1;
        vector<vector<int>> dist(n, vector<int>(1 << n, -1));
        queue<pair<int, int>> q;
        for (int i = 0; i < n; i++) {
            dist[i][1 << i] = 0;
            q.push({i, 1 << i});
        }
        while (!q.empty()) {
            auto [node, mask] = q.front();
            q.pop();
            if (mask == full) {
                return dist[node][mask];
            }
            for (int nxt : graph[node]) {
                int nmask = mask | (1 << nxt);
                if (dist[nxt][nmask] == -1) {
                    dist[nxt][nmask] = dist[node][mask] + 1;
                    q.push({nxt, nmask});
                }
            }
        }
        return 0;
    }
};
