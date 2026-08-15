class Solution {
  public:
    string reverseParentheses(string s) {
        vector<string> stack;
        stack.push_back("");
        for (char ch : s) {
            if (ch == '(') {
                stack.push_back("");
            } else if (ch == ')') {
                string top = stack.back();
                stack.pop_back();
                reverse(top.begin(), top.end());
                stack.back() += top;
            } else {
                stack.back() += ch;
            }
        }
        return stack[0];
    }
};
