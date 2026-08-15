class Solution {
  public:
    int largestRectangleArea(vector<int> &heights) {
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
