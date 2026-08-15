class Solution {
  public:
    vector<vector<int>> wallsAndGates(vector<vector<int>> &rooms) {
        const int INF = 2147483647;
        int m = rooms.size();
        int n = rooms[0].size();
        queue<pair<int, int>> q;
        for (int r = 0; r < m; r++) {
            for (int c = 0; c < n; c++) {
                if (rooms[r][c] == 0) {
                    q.push({r, c});
                }
            }
        }
        int dr[4] = {1, -1, 0, 0};
        int dc[4] = {0, 0, 1, -1};
        int dist = 0;
        while (!q.empty()) {
            dist++;
            int size = q.size();
            for (int i = 0; i < size; i++) {
                auto [r, c] = q.front();
                q.pop();
                for (int d = 0; d < 4; d++) {
                    int nr = r + dr[d];
                    int nc = c + dc[d];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && rooms[nr][nc] == INF) {
                        rooms[nr][nc] = dist;
                        q.push({nr, nc});
                    }
                }
            }
        }
        return rooms;
    }
};
