class Solution {
  public:
    long long minCostConnectPoints(vector<vector<int>> &points) {
        int n = points.size();
        if (n <= 1) {
            return 0;
        }
        const long long INF = LLONG_MAX;
        vector<long long> best(n, INF);
        best[0] = 0;
        vector<bool> used(n, false);
        long long total = 0;
        for (int step = 0; step < n; step++) {
            int u = -1;
            for (int v = 0; v < n; v++) {
                if (!used[v] && (u == -1 || best[v] < best[u])) {
                    u = v;
                }
            }
            total += best[u];
            used[u] = true;
            for (int v = 0; v < n; v++) {
                if (!used[v]) {
                    long long d = llabs((long long)points[u][0] - points[v][0]) +
                                  llabs((long long)points[u][1] - points[v][1]);
                    if (d < best[v]) {
                        best[v] = d;
                    }
                }
            }
        }
        return total;
    }
};
