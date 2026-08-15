class Solution {
  public:
    vector<int> maxSubgraphScore(int n, vector<vector<int>> &edges, vector<int> &good) {
        const long long NEG = (long long)-1e18;
        vector<vector<int>> adj(n);
        for (auto &e : edges) {
            adj[e[0]].push_back(e[1]);
            adj[e[1]].push_back(e[0]);
        }

        vector<int> parent(n, -1);
        vector<vector<int>> children(n);
        vector<int> order;
        vector<int> stack;
        parent[0] = -2;
        stack.push_back(0);
        while (!stack.empty()) {
            int u = stack.back();
            stack.pop_back();
            order.push_back(u);
            for (int v : adj[u]) {
                if (v == parent[u])
                    continue;
                parent[v] = u;
                children[u].push_back(v);
                stack.push_back(v);
            }
        }

        vector<int> weight(n);
        for (int i = 0; i < n; i++)
            weight[i] = good[i] ? 1 : -1;

        vector<long long> down(n, 0);
        for (int i = (int)order.size() - 1; i >= 0; i--) {
            int u = order[i];
            long long s = weight[u];
            for (int c : children[u]) {
                if (down[c] > 0)
                    s += down[c];
            }
            down[u] = s;
        }

        vector<long long> up(n, 0);
        up[0] = NEG;
        vector<int> result(n, 0);
        for (int u : order) {
            long long total_pos = 0;
            for (int c : children[u])
                total_pos += max(0LL, down[c]);
            for (int c : children[u]) {
                up[c] = weight[u] + (total_pos - max(0LL, down[c])) + max(0LL, up[u]);
            }
            result[u] = (int)(weight[u] + total_pos + max(0LL, up[u]));
        }
        return result;
    }
};
