class Solution {
  public:
    int countSubIslands(vector<vector<int>> &grid1, vector<vector<int>> &grid2) {
        int m = grid2.size(), n = grid2[0].size();
        vector<vector<bool>> seen(m, vector<bool>(n, false));
        int count = 0;
        int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        for (int si = 0; si < m; si++) {
            for (int sj = 0; sj < n; sj++) {
                if (grid2[si][sj] == 1 && !seen[si][sj]) {
                    seen[si][sj] = true;
                    vector<pair<int, int>> stack{{si, sj}};
                    bool isSub = true;
                    while (!stack.empty()) {
                        auto [x, y] = stack.back();
                        stack.pop_back();
                        if (grid1[x][y] != 1)
                            isSub = false;
                        for (auto &d : dirs) {
                            int nx = x + d[0], ny = y + d[1];
                            if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid2[nx][ny] == 1 &&
                                !seen[nx][ny]) {
                                seen[nx][ny] = true;
                                stack.push_back({nx, ny});
                            }
                        }
                    }
                    if (isSub)
                        count++;
                }
            }
        }
        return count;
    }
};
