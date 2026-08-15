class Solution {
  public:
    int networkDelayTime(vector<vector<int>> &times, int n, int k) {
        vector<vector<pair<int, int>>> graph(n + 1);
        for (const auto &t : times) {
            graph[t[0]].push_back({t[1], t[2]});
        }

        vector<int> dist(n + 1, -1);
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> heap;
        heap.push({0, k});
        while (!heap.empty()) {
            auto [d, u] = heap.top();
            heap.pop();
            if (dist[u] != -1)
                continue;
            dist[u] = d;
            for (const auto &[v, w] : graph[u]) {
                if (dist[v] == -1) {
                    heap.push({d + w, v});
                }
            }
        }

        int best = -1;
        for (int i = 1; i <= n; i++) {
            if (dist[i] == -1)
                return -1;
            best = max(best, dist[i]);
        }
        return best;
    }
};
