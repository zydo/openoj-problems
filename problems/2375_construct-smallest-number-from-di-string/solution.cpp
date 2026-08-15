class Solution {
  public:
    string smallestNumber(string pattern) {
        int n = pattern.size();
        string result;
        result.reserve(n + 1);
        string stack;
        for (int i = 0; i <= n; i++) {
            stack.push_back(char('1' + i));
            if (i == n || pattern[i] == 'I') {
                while (!stack.empty()) {
                    result.push_back(stack.back());
                    stack.pop_back();
                }
            }
        }
        return result;
    }
};
