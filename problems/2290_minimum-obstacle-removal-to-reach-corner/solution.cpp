class Solution {
  public:
    int minimumObstacles(vector<vector<int>> &grid) {
        int m = grid.size();
        int n = grid[0].size();
        const int INF = INT_MAX;
        vector<vector<int>> dist(m, vector<int>(n, INF));
        dist[0][0] = 0;
        deque<pair<int, int>> dq;
        dq.push_back({0, 0});
        int di[4] = {0, 0, 1, -1};
        int dj[4] = {1, -1, 0, 0};
        while (!dq.empty()) {
            auto [i, j] = dq.front();
            dq.pop_front();
            int d = dist[i][j];
            for (int k = 0; k < 4; k++) {
                int ni = i + di[k], nj = j + dj[k];
                if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                    int nd = d + grid[ni][nj];
                    if (nd < dist[ni][nj]) {
                        dist[ni][nj] = nd;
                        if (grid[ni][nj] == 0)
                            dq.push_front({ni, nj});
                        else
                            dq.push_back({ni, nj});
                    }
                }
            }
        }
        return dist[m - 1][n - 1];
    }
};
