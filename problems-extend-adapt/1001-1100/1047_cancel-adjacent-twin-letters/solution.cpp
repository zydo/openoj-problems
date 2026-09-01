class Solution {
  public:
    string cancelTwinPairs(string s) {
        string stack;
        for (char ch : s) {
            if (!stack.empty() && stack.back() == ch) {
                stack.pop_back();
            } else {
                stack.push_back(ch);
            }
        }
        return stack;
    }
};
