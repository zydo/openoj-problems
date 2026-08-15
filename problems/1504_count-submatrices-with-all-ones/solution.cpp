class Solution {
  public:
    int numSubmat(vector<vector<int>> &mat) {
        int m = (int)mat.size();
        int n = m > 0 ? (int)mat[0].size() : 0;
        int total = 0;
        vector<int> height(n, 0);
        for (int r = 0; r < m; r++) {
            for (int c = 0; c < n; c++) {
                if (mat[r][c] == 1) {
                    height[c] += 1;
                } else {
                    height[c] = 0;
                }
            }
            for (int left = 0; left < n; left++) {
                int minH = height[left];
                for (int right = left; right < n; right++) {
                    if (height[right] < minH) {
                        minH = height[right];
                    }
                    total += minH;
                }
            }
        }
        return total;
    }
};
