class Solution {
  public:
    int gridSpreadTime(vector<vector<int>> &grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        vector<vector<int>> g = grid;
        queue<array<int, 3>> q;
        int pending = 0;
        // Multi-source BFS: every active cell starts at t = 0; the answer
        // is the time the last pending cell activates. Count pending cells so
        // walled-off stragglers can be detected at the end.
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (g[r][c] == 2) {
                    q.push({r, c, 0});
                } else if (g[r][c] == 1) {
                    pending++;
                }
            }
        }
        int rounds = 0;
        const int dr[4] = {1, -1, 0, 0};
        const int dc[4] = {0, 0, 1, -1};
        while (!q.empty()) {
            auto [r, c, t] = q.front();
            q.pop();
            // Tracking the max activation time spares per-round batching.
            rounds = max(rounds, t);
            for (int d = 0; d < 4; d++) {
                int nr = r + dr[d];
                int nc = c + dc[d];
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && g[nr][nc] == 1) {
                    // Flip to active on enqueue: each cell queues at most
                    // once and `pending` stays in sync with the grid.
                    g[nr][nc] = 2;
                    pending--;
                    q.push({nr, nc, t + 1});
                }
            }
        }
        return pending == 0 ? rounds : -1;
    }
};
