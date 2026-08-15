class Solution {
  public:
    int reachableNodes(vector<vector<int>> &edges, int maxMoves, int n) {
        vector<vector<pair<int, int>>> adj(n);
        for (auto &e : edges) {
            int u = e[0], v = e[1], cnt = e[2];
            adj[u].push_back({v, cnt + 1});
            adj[v].push_back({u, cnt + 1});
        }
        const long long INF = LLONG_MAX;
        vector<long long> dist(n, INF);
        dist[0] = 0;
        priority_queue<pair<long long, int>, vector<pair<long long, int>>,
                       greater<pair<long long, int>>>
            pq;
        pq.push({0, 0});
        while (!pq.empty()) {
            auto [d, u] = pq.top();
            pq.pop();
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
        for (long long d : dist) {
            if (d <= maxMoves) {
                result += 1;
            }
        }
        for (auto &e : edges) {
            int u = e[0], v = e[1], cnt = e[2];
            long long a = max(0LL, (long long)maxMoves - dist[u]);
            long long b = max(0LL, (long long)maxMoves - dist[v]);
            result += min((long long)cnt, a + b);
        }
        return (int)result;
    }
};
