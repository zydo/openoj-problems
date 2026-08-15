class Solution {
  public:
    int nearestExit(vector<vector<string>> &maze, vector<int> &entrance) {
        int m = maze.size(), n = maze[0].size();
        int er = entrance[0], ec = entrance[1];
        vector<vector<int>> dist(m, vector<int>(n, -1));
        dist[er][ec] = 0;
        queue<pair<int, int>> q;
        q.push({er, ec});
        int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        while (!q.empty()) {
            auto [i, j] = q.front();
            q.pop();
            if ((i == 0 || i == m - 1 || j == 0 || j == n - 1) && !(i == er && j == ec)) {
                return dist[i][j];
            }
            for (auto &d : dirs) {
                int ni = i + d[0], nj = j + d[1];
                if (ni >= 0 && ni < m && nj >= 0 && nj < n && maze[ni][nj] == "." &&
                    dist[ni][nj] == -1) {
                    dist[ni][nj] = dist[i][j] + 1;
                    q.push({ni, nj});
                }
            }
        }
        return -1;
    }
};
