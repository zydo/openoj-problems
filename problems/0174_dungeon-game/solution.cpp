class Solution {
  public:
    int calculateMinimumHP(vector<vector<int>> &dungeon) {
        int m = dungeon.size();
        int n = dungeon[0].size();
        const int INF = numeric_limits<int>::max() / 2;
        vector<vector<int>> need(m + 1, vector<int>(n + 1, INF));
        need[m][n - 1] = 1;
        for (int i = m - 1; i >= 0; i--) {
            for (int j = n - 1; j >= 0; j--) {
                int bestNext = min(need[i + 1][j], need[i][j + 1]);
                need[i][j] = max(1, bestNext - dungeon[i][j]);
            }
        }
        return need[0][0];
    }
};
