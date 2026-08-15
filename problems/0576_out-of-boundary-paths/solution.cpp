class Solution {
  public:
    int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
        const long long MOD = 1000000007LL;
        if (maxMove == 0) {
            return 0;
        }
        vector<vector<long long>> prev(m, vector<long long>(n, 0));
        for (int step = 0; step < maxMove; step++) {
            vector<vector<long long>> cur(m, vector<long long>(n, 0));
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    long long total = 0;
                    if (i + 1 >= m)
                        total++;
                    else
                        total += prev[i + 1][j];
                    if (i - 1 < 0)
                        total++;
                    else
                        total += prev[i - 1][j];
                    if (j + 1 >= n)
                        total++;
                    else
                        total += prev[i][j + 1];
                    if (j - 1 < 0)
                        total++;
                    else
                        total += prev[i][j - 1];
                    cur[i][j] = total % MOD;
                }
            }
            prev = move(cur);
        }
        return (int)prev[startRow][startColumn];
    }
};
