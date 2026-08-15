class Solution {
  public:
    int countSquares(vector<vector<int>> &matrix) {
        int m = matrix.size();
        int n = matrix[0].size();
        int total = 0;
        vector<int> prev(n, 0), cur(n, 0);
        for (int i = 0; i < m; i++) {
            fill(cur.begin(), cur.end(), 0);
            for (int j = 0; j < n; j++) {
                if (!matrix[i][j])
                    continue;
                if (i == 0 || j == 0) {
                    cur[j] = 1;
                } else {
                    cur[j] = min(prev[j], min(cur[j - 1], prev[j - 1])) + 1;
                }
                total += cur[j];
            }
            swap(prev, cur);
        }
        return total;
    }
};
