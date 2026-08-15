class Solution {
  public:
    int minCost(vector<vector<int>> &grid) {
        int m = grid.size();
        int n = grid[0].size();
        int di[4] = {0, 0, 1, -1};
        int dj[4] = {1, -1, 0, 0};
        vector<vector<int>> dist(m, vector<int>(n, INT_MAX));
        dist[0][0] = 0;
        deque<pair<int, int>> dq;
        dq.push_front({0, 0});
        while (!dq.empty()) {
            auto [i, j] = dq.front();
            dq.pop_front();
            int d = dist[i][j];
            for (int s = 1; s <= 4; s++) {
                int ni = i + di[s - 1];
                int nj = j + dj[s - 1];
                if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                    int cost = grid[i][j] == s ? 0 : 1;
                    if (d + cost < dist[ni][nj]) {
                        dist[ni][nj] = d + cost;
                        if (cost == 0) {
                            dq.push_front({ni, nj});
                        } else {
                            dq.push_back({ni, nj});
                        }
                    }
                }
            }
        }
        return dist[m - 1][n - 1];
    }
};
