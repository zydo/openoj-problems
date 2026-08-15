class Solution {
  public:
    int maximalSquare(vector<vector<string>> &matrix) {
        int m = matrix.size();
        int n = matrix[0].size();
        int best = 0;
        vector<int> prev(n + 1, 0);
        for (int i = 0; i < m; i++) {
            vector<int> curr(n + 1, 0);
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == "1") {
                    curr[j + 1] = min(prev[j], min(prev[j + 1], curr[j])) + 1;
                    best = max(best, curr[j + 1]);
                }
            }
            prev = curr;
        }
        return best * best;
    }
};
