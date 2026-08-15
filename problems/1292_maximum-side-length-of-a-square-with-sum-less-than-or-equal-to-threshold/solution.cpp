class Solution {
  public:
    int maxSideLength(vector<vector<int>> &mat, int threshold) {
        int m = (int)mat.size();
        int n = (int)mat[0].size();
        vector<vector<long long>> prefix(m + 1, vector<long long>(n + 1, 0));
        for (int i = 0; i < m; i++) {
            const vector<long long> &prow = prefix[i];
            vector<long long> &crow = prefix[i + 1];
            const vector<int> &row = mat[i];
            for (int j = 0; j < n; j++) {
                crow[j + 1] = crow[j] + prow[j + 1] - prow[j] + row[j];
            }
        }

        auto squareSum = [&](int i, int j, int k) {
            const auto &p = prefix;
            return p[i + k][j + k] - p[i][j + k] - p[i + k][j] + p[i][j];
        };

        int ans = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                while (i + ans < m && j + ans < n && squareSum(i, j, ans + 1) <= threshold) {
                    ans += 1;
                }
            }
        }
        return ans;
    }
};
