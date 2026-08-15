class Solution {
  public:
    long long minimumWeight(int n, vector<vector<int>> &edges, int src1, int src2, int dest) {
        vector<vector<pair<int, int>>> adj(n), radj(n);
        for (auto &e : edges) {
            adj[e[0]].push_back({e[1], e[2]});
            radj[e[1]].push_back({e[0], e[2]});
        }
        vector<long long> d1 = dijkstra(n, adj, src1);
        vector<long long> d2 = dijkstra(n, adj, src2);
        vector<long long> dd = dijkstra(n, radj, dest);
        long long best = LLONG_MAX;
        for (int v = 0; v < n; v++) {
            if (dd[v] < LLONG_MAX && d1[v] < LLONG_MAX && d2[v] < LLONG_MAX) {
                long long total = d1[v] + d2[v] + dd[v];
                if (total < best)
                    best = total;
            }
        }
        return best == LLONG_MAX ? -1 : best;
    }

  private:
    vector<long long> dijkstra(int n, vector<vector<pair<int, int>>> &adj, int src) {
        const long long INF = LLONG_MAX;
        vector<long long> dist(n, INF);
        dist[src] = 0;
        priority_queue<pair<long long, int>, vector<pair<long long, int>>,
                       greater<pair<long long, int>>>
            heap;
        heap.push({0, src});
        while (!heap.empty()) {
            auto [d, u] = heap.top();
            heap.pop();
            if (d > dist[u])
                continue;
            for (auto &[v, w] : adj[u]) {
                long long nd = d + w;
                if (nd < dist[v]) {
                    dist[v] = nd;
                    heap.push({nd, v});
                }
            }
        }
        return dist;
    }
};
