class Solution {
  public:
    int rootCount(vector<vector<int>> &edges, vector<vector<int>> &guesses, int k) {
        int n = edges.size() + 1;
        vector<vector<int>> graph(n);
        for (auto &e : edges) {
            graph[e[0]].push_back(e[1]);
            graph[e[1]].push_back(e[0]);
        }
        auto key = [](long long a, long long b) { return (a << 32) | (b & 0xFFFFFFFFLL); };
        unordered_set<long long> guessSet;
        for (auto &g : guesses) {
            guessSet.insert(key(g[0], g[1]));
        }

        vector<int> parent(n, -1);
        vector<int> order;
        order.reserve(n);
        vector<bool> visited(n, false);
        vector<int> stack;
        stack.push_back(0);
        visited[0] = true;
        while (!stack.empty()) {
            int u = stack.back();
            stack.pop_back();
            order.push_back(u);
            for (int v : graph[u]) {
                if (!visited[v]) {
                    visited[v] = true;
                    parent[v] = u;
                    stack.push_back(v);
                }
            }
        }

        vector<int> cnt(n, 0);
        for (int v = 1; v < n; v++) {
            if (guessSet.count(key(parent[v], v))) {
                cnt[0]++;
            }
        }

        int ans = cnt[0] >= k ? 1 : 0;
        for (size_t oi = 1; oi < order.size(); oi++) {
            int u = order[oi];
            int p = parent[u];
            int c = cnt[p];
            if (guessSet.count(key(p, u))) {
                c--;
            }
            if (guessSet.count(key(u, p))) {
                c++;
            }
            cnt[u] = c;
            if (c >= k) {
                ans++;
            }
        }
        return ans;
    }
};
