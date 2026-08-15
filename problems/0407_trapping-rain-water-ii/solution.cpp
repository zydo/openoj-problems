class Solution {
  public:
    int trapRainWater(vector<vector<int>> &heightMap) {
        int m = heightMap.size(), n = heightMap[0].size();
        vector<vector<bool>> visited(m, vector<bool>(n, false));
        priority_queue<vector<int>, vector<vector<int>>, greater<>> heap;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                    heap.push({heightMap[i][j], i, j});
                    visited[i][j] = true;
                }
            }
        }
        int water = 0;
        int di[4] = {-1, 1, 0, 0}, dj[4] = {0, 0, -1, 1};
        while (!heap.empty()) {
            vector<int> cell = heap.top();
            heap.pop();
            int h = cell[0];
            for (int k = 0; k < 4; k++) {
                int ni = cell[1] + di[k], nj = cell[2] + dj[k];
                if (ni >= 0 && ni < m && nj >= 0 && nj < n && !visited[ni][nj]) {
                    visited[ni][nj] = true;
                    int nh = heightMap[ni][nj];
                    if (nh < h) {
                        water += h - nh;
                    }
                    heap.push({max(h, nh), ni, nj});
                }
            }
        }
        return water;
    }
};
