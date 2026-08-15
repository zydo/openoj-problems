class Solution {
  public:
    int largestSubmatrix(vector<vector<int>> &matrix) {
        int m = matrix.size();
        if (m == 0)
            return 0;
        int n = matrix[0].size();
        vector<int> heights(n, 0);
        int best = 0;
        for (auto &row : matrix) {
            for (int j = 0; j < n; j++) {
                heights[j] = row[j] == 1 ? heights[j] + 1 : 0;
            }
            vector<int> ordered = heights;
            sort(ordered.begin(), ordered.end(), greater<int>());
            for (int i = 0; i < n; i++) {
                int h = ordered[i];
                if (h == 0)
                    break;
                int area = h * (i + 1);
                if (area > best)
                    best = area;
            }
        }
        return best;
    }
};
