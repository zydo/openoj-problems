class Solution {
  public:
    int maxDistance(vector<vector<int>> &grid) {
        int n = grid.size();
        vector<vector<int>> g = grid;
        queue<pair<int, int>> q;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (g[i][j] == 1) {
                    q.push({i, j});
                }
            }
        }
        if (q.empty() || (int)q.size() == n * n) {
            return -1;
        }
        int dist = 0;
        int di[4] = {1, -1, 0, 0};
        int dj[4] = {0, 0, 1, -1};
        while (!q.empty()) {
            dist++;
            for (int sz = q.size(); sz > 0; sz--) {
                auto [i, j] = q.front();
                q.pop();
                for (int d = 0; d < 4; d++) {
                    int ni = i + di[d];
                    int nj = j + dj[d];
                    if (ni >= 0 && ni < n && nj >= 0 && nj < n && g[ni][nj] == 0) {
                        g[ni][nj] = 1;
                        q.push({ni, nj});
                    }
                }
            }
        }
        return dist - 1;
    }
};
