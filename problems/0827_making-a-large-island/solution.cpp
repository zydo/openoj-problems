class Solution {
  public:
    int largestIsland(vector<vector<int>> &grid) {
        int n = grid.size();
        vector<vector<int>> label(n, vector<int>(n, 0));
        unordered_map<int, int> sizes;

        auto flood = [&](int si, int sj, int color) {
            int count = 0;
            vector<pair<int, int>> stack;
            stack.push_back({si, sj});
            label[si][sj] = color;
            int di[] = {1, -1, 0, 0};
            int dj[] = {0, 0, 1, -1};
            while (!stack.empty()) {
                auto [i, j] = stack.back();
                stack.pop_back();
                count++;
                for (int d = 0; d < 4; d++) {
                    int ni = i + di[d];
                    int nj = j + dj[d];
                    if (ni >= 0 && ni < n && nj >= 0 && nj < n && grid[ni][nj] == 1 &&
                        label[ni][nj] == 0) {
                        label[ni][nj] = color;
                        stack.push_back({ni, nj});
                    }
                }
            }
            return count;
        };

        int color = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1 && label[i][j] == 0) {
                    color++;
                    sizes[color] = flood(i, j, color);
                }
            }
        }

        int best = 0;
        for (auto &[c, size] : sizes) {
            best = max(best, size);
        }
        int di[] = {1, -1, 0, 0};
        int dj[] = {0, 0, 1, -1};
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 0) {
                    unordered_set<int> seen;
                    for (int d = 0; d < 4; d++) {
                        int ni = i + di[d];
                        int nj = j + dj[d];
                        if (ni >= 0 && ni < n && nj >= 0 && nj < n && label[ni][nj] != 0) {
                            seen.insert(label[ni][nj]);
                        }
                    }
                    int total = 1;
                    for (int c : seen) {
                        total += sizes[c];
                    }
                    best = max(best, total);
                }
            }
        }
        return best;
    }
};
