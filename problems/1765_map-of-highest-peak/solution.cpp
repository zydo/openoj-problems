class Solution {
  public:
    vector<vector<int>> highestPeak(vector<vector<int>> &isWater) {
        int m = isWater.size(), n = isWater[0].size();
        vector<vector<int>> height(m, vector<int>(n, -1));
        queue<pair<int, int>> q;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (isWater[i][j] == 1) {
                    height[i][j] = 0;
                    q.push({i, j});
                }
            }
        }
        int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        while (!q.empty()) {
            auto [i, j] = q.front();
            q.pop();
            for (auto &d : dirs) {
                int ni = i + d[0], nj = j + d[1];
                if (ni >= 0 && ni < m && nj >= 0 && nj < n && height[ni][nj] == -1) {
                    height[ni][nj] = height[i][j] + 1;
                    q.push({ni, nj});
                }
            }
        }
        return height;
    }
};
