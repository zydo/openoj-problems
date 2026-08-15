class Solution {
  public:
    int longestValidParentheses(string s) {
        vector<int> stack;
        stack.reserve(s.size() + 1);
        stack.push_back(-1);
        int best = 0;
        for (int i = 0; i < (int)s.size(); i++) {
            if (s[i] == '(') {
                stack.push_back(i);
            } else {
                stack.pop_back();
                if (stack.empty()) {
                    stack.push_back(i);
                } else {
                    best = max(best, i - stack.back());
                }
            }
        }
        return best;
    }
};
