class Solution {
  public:
    int countReachableExpandedVertices(vector<vector<int>> &links, int moveBudget, int vertexCount) {
        vector<vector<pair<int, int>>> adj(vertexCount);
        // Subdividing [u, v, cnt] yields cnt + 1 unit links, so Dijkstra on
        // the compact graph with weight cnt + 1 gives the true distances.
        for (auto &e : links) {
            int u = e[0], v = e[1], cnt = e[2];
            adj[u].push_back({v, cnt + 1});
            adj[v].push_back({u, cnt + 1});
        }
        const long long INF = LLONG_MAX;
        vector<long long> dist(vertexCount, INF);
        dist[0] = 0;
        priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> pq;
        pq.push({0, 0});
        while (!pq.empty()) {
            auto [d, u] = pq.top();
            pq.pop();
            // Lazy deletion: a stale heap entry no longer matches dist[u].
            if (d != dist[u]) {
                continue;
            }
            for (auto [v, w] : adj[u]) {
                long long nd = d + w;
                if (nd < dist[v]) {
                    dist[v] = nd;
                    pq.push({nd, v});
                }
            }
        }
        long long result = 0;
        // Half one: original nodes within the budget.
        for (long long d : dist) {
            if (d <= moveBudget) {
                result += 1;
            }
        }
        // Half two: each edge contributes the frontiers walked in from both
        // ends; min(cnt, a + b) clamps the overlap where they meet.
        for (auto &e : links) {
            int u = e[0], v = e[1], cnt = e[2];
            long long a = max(0LL, (long long)moveBudget - dist[u]);
            long long b = max(0LL, (long long)moveBudget - dist[v]);
            result += min((long long)cnt, a + b);
        }
        return (int)result;
    }
};
