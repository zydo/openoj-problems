class Solution {
  public:
    int maximalRectangle(vector<vector<string>> &matrix) {
        if (matrix.empty() || matrix[0].empty())
            return 0;
        int rows = matrix.size(), cols = matrix[0].size();
        vector<int> heights(cols, 0);
        int best = 0;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                heights[c] = matrix[r][c] == "1" ? heights[c] + 1 : 0;
            }
            best = max(best, largestArea(heights));
        }
        return best;
    }

  private:
    int largestArea(vector<int> &heights) {
        int n = heights.size();
        vector<int> stack;
        int best = 0;
        for (int i = 0; i <= n; i++) {
            int h = i == n ? 0 : heights[i];
            while (!stack.empty() && heights[stack.back()] > h) {
                int height = heights[stack.back()];
                stack.pop_back();
                int left = stack.empty() ? -1 : stack.back();
                best = max(best, height * (i - left - 1));
            }
            stack.push_back(i);
        }
        return best;
    }
};
