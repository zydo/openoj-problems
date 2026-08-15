class Solution {
  public:
    vector<vector<int>> matrixBlockSum(vector<vector<int>> &mat, int k) {
        int m = mat.size(), n = mat[0].size();
        vector<vector<long long>> prefix(m + 1, vector<long long>(n + 1, 0));
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                prefix[i + 1][j + 1] =
                    prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j] + mat[i][j];
            }
        }
        vector<vector<int>> answer(m, vector<int>(n));
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int r1 = max(0, i - k), r2 = min(m, i + k + 1);
                int c1 = max(0, j - k), c2 = min(n, j + k + 1);
                answer[i][j] = static_cast<int>(prefix[r2][c2] - prefix[r1][c2] - prefix[r2][c1] +
                                                prefix[r1][c1]);
            }
        }
        return answer;
    }
};
