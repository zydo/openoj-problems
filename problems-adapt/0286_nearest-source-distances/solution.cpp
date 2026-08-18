class Solution {
  public:
    vector<vector<int>> nearestSourceDistances(vector<vector<int>> &grid) {
        const int INF = 2147483647;
        int m = grid.size();
        int n = grid[0].size();
        // Invert the search: enqueue every source cell at once and run one BFS
        // outward, rather than searching from each open cell.
        queue<pair<int, int>> q;
        for (int r = 0; r < m; r++) {
            for (int c = 0; c < n; c++) {
                if (grid[r][c] == 0) {
                    q.push({r, c});
                }
            }
        }
        int dr[4] = {1, -1, 0, 0};
        int dc[4] = {0, 0, 1, -1};
        int dist = 0;
        while (!q.empty()) {
            // Expand one whole layer per step: every distance-d cell is
            // found before any d+1 cell is labeled, which is what keeps
            // distances minimal (first reach = shortest path from a source).
            dist++;
            int size = q.size();
            for (int i = 0; i < size; i++) {
                auto [r, c] = q.front();
                q.pop();
                for (int d = 0; d < 4; d++) {
                    int nr = r + dr[d];
                    int nc = c + dc[d];
                    // Still INF means unvisited; writing the distance doubles
                    // as the visited mark, and sources and blocked cells never match INF
                    // so they are never entered or overwritten.
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == INF) {
                        grid[nr][nc] = dist;
                        q.push({nr, nc});
                    }
                }
            }
        }
        return grid;
    }
};
