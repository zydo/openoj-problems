class Solution {
  public:
    int minimumPairingDistance(vector<vector<int>> &points, vector<vector<int>> &anchors) {
        int n = points.size();
        int m = anchors.size();
        vector<vector<int>> dist(n, vector<int>(m));
        for (int i = 0; i < n; i++) {
            for (int b = 0; b < m; b++) {
                dist[i][b] = abs(points[i][0] - anchors[b][0]) + abs(points[i][1] - anchors[b][1]);
            }
        }
        int size = 1 << m;
        const int INF = INT_MAX;
        vector<int> dp(size, INF);
        dp[0] = 0;
        int best = INF;
        for (int mask = 0; mask < size; mask++) {
            if (dp[mask] == INF) {
                continue;
            }
            int assigned = __builtin_popcount(mask);
            if (assigned == n) {
                if (dp[mask] < best) {
                    best = dp[mask];
                }
                continue;
            }
            for (int b = 0; b < m; b++) {
                if (!(mask >> b & 1)) {
                    int candidate = dp[mask] + dist[assigned][b];
                    int next = mask | (1 << b);
                    if (candidate < dp[next]) {
                        dp[next] = candidate;
                    }
                }
            }
        }
        return best;
    }
};
