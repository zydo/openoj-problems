class Solution {
  public:
    int swimInWater(vector<vector<int>> &grid) {
        int n = grid.size();
        vector<vector<int>> dist(n, vector<int>(n, INT_MAX));
        dist[0][0] = grid[0][0];
        priority_queue<tuple<int, int, int>, vector<tuple<int, int, int>>,
                       greater<tuple<int, int, int>>>
            heap;
        heap.push({grid[0][0], 0, 0});
        int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        while (!heap.empty()) {
            auto [t, r, c] = heap.top();
            heap.pop();
            if (r == n - 1 && c == n - 1)
                return t;
            if (t > dist[r][c])
                continue;
            for (auto &d : dirs) {
                int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
                    int nt = max(t, grid[nr][nc]);
                    if (nt < dist[nr][nc]) {
                        dist[nr][nc] = nt;
                        heap.push({nt, nr, nc});
                    }
                }
            }
        }
        return dist[n - 1][n - 1];
    }
};
