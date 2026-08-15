class Solution {
  public:
    int countSubmatrices(vector<vector<int>> &grid, int k) {
        int rows = (int)grid.size(), cols = (int)grid[0].size();
        vector<long long> colSums(cols, 0);
        int count = 0;
        for (int i = 0; i < rows; i++) {
            long long prefix = 0;
            for (int j = 0; j < cols; j++) {
                colSums[j] += grid[i][j];
                prefix += colSums[j];
                if (prefix > k)
                    break;
                count++;
            }
        }
        return count;
    }
};
