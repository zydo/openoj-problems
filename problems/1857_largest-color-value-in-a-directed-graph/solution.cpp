class Solution {
  public:
    int largestPathValue(string colors, vector<vector<int>> &edges) {
        int n = (int)colors.size();
        vector<vector<int>> graph(n);
        vector<int> indeg(n, 0);
        for (auto &e : edges) {
            graph[e[0]].push_back(e[1]);
            indeg[e[1]]++;
        }

        vector<array<int, 26>> dp(n);
        for (auto &row : dp)
            row.fill(0);

        vector<int> queue;
        queue.reserve(n);
        for (int i = 0; i < n; i++)
            if (indeg[i] == 0)
                queue.push_back(i);
        int head = 0, visited = 0, ans = 0;
        while (head < (int)queue.size()) {
            int u = queue[head++];
            visited++;
            dp[u][colors[u] - 'a']++;
            auto &du = dp[u];
            for (int c = 0; c < 26; c++)
                ans = max(ans, du[c]);
            for (int v : graph[u]) {
                auto &dv = dp[v];
                for (int c = 0; c < 26; c++)
                    if (du[c] > dv[c])
                        dv[c] = du[c];
                if (--indeg[v] == 0)
                    queue.push_back(v);
            }
        }
        if (visited != n)
            return -1;
        return ans;
    }
};
