class Solution {
  public:
    int shortestPathBinaryMatrix(vector<vector<int>> &grid) {
        int n = grid.size();
        if (grid[0][0] != 0 || grid[n - 1][n - 1] != 0) {
            return -1;
        }
        if (n == 1) {
            return 1;
        }
        vector<vector<int>> dist(n, vector<int>(n, 0));
        queue<pair<int, int>> q;
        dist[0][0] = 1;
        q.push({0, 0});
        static const int dx[] = {-1, -1, -1, 0, 0, 1, 1, 1};
        static const int dy[] = {-1, 0, 1, -1, 1, -1, 0, 1};
        while (!q.empty()) {
            auto [x, y] = q.front();
            q.pop();
            for (int d = 0; d < 8; d++) {
                int nx = x + dx[d], ny = y + dy[d];
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] == 0 &&
                    dist[nx][ny] == 0) {
                    if (nx == n - 1 && ny == n - 1) {
                        return dist[x][y] + 1;
                    }
                    dist[nx][ny] = dist[x][y] + 1;
                    q.push({nx, ny});
                }
            }
        }
        return -1;
    }
};
