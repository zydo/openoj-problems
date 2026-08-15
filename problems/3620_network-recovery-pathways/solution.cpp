class Solution {
  public:
    int findMaxPathScore(vector<vector<int>> &edges, vector<bool> &online, long long k) {
        int n = (int)online.size();
        vector<vector<pair<int, int>>> adj(n);
        vector<int> indeg(n, 0);
        for (auto &e : edges) {
            adj[e[0]].push_back({e[1], e[2]});
            indeg[e[1]] += 1;
        }

        deque<int> queue;
        for (int i = 0; i < n; i++)
            if (indeg[i] == 0)
                queue.push_back(i);
        vector<int> topo;
        while (!queue.empty()) {
            int u = queue.front();
            queue.pop_front();
            topo.push_back(u);
            for (auto &nb : adj[u]) {
                if (--indeg[nb.first] == 0)
                    queue.push_back(nb.first);
            }
        }

        set<int> costSet;
        for (auto &e : edges)
            costSet.insert(e[2]);
        vector<int> costs(costSet.begin(), costSet.end());

        const long long INF = LLONG_MAX;
        auto feasible = [&](long long s) {
            vector<long long> dist(n, INF);
            dist[0] = 0;
            for (int u : topo) {
                if (dist[u] == INF || !online[u])
                    continue;
                for (auto &nb : adj[u]) {
                    if (nb.second >= s && online[nb.first]) {
                        long long nd = dist[u] + nb.second;
                        if (nd < dist[nb.first])
                            dist[nb.first] = nd;
                    }
                }
            }
            return dist[n - 1] <= k;
        };

        if (!feasible(0))
            return -1;
        if (costs.empty())
            return 0;
        int lo = 0, hi = (int)costs.size() - 1;
        int ans = costs[0];
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (feasible(costs[mid])) {
                ans = costs[mid];
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return ans;
    }
};
