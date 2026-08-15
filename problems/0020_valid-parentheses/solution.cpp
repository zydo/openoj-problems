class Solution {
  public:
    bool isValid(string s) {
        vector<char> stack;
        for (char ch : s) {
            if (ch == '(' || ch == '[' || ch == '{') {
                stack.push_back(ch);
            } else {
                char open = ch == ')' ? '(' : ch == ']' ? '[' : '{';
                if (stack.empty() || stack.back() != open) {
                    return false;
                }
                stack.pop_back();
            }
        }
        return stack.empty();
    }
};
