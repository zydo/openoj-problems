class Solution {
  public:
    vector<int> canSeePersonsCount(vector<int> &heights) {
        int n = heights.size();
        vector<int> answer(n);
        vector<int> stack;
        for (int i = n - 1; i >= 0; i--) {
            int seen = 0;
            while (!stack.empty() && stack.back() < heights[i]) {
                stack.pop_back();
                seen++;
            }
            answer[i] = seen + (stack.empty() ? 0 : 1);
            stack.push_back(heights[i]);
        }
        return answer;
    }
};
