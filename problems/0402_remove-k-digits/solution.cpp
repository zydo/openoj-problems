class Solution {
  public:
    string removeKdigits(string num, int k) {
        string stack;
        for (char ch : num) {
            while (k > 0 && !stack.empty() && stack.back() > ch) {
                stack.pop_back();
                --k;
            }
            stack.push_back(ch);
        }
        if (k > 0) {
            stack.resize(stack.size() - (size_t)k);
        }
        size_t pos = stack.find_first_not_of('0');
        string result = (pos == string::npos) ? "" : stack.substr(pos);
        return result.empty() ? "0" : result;
    }
};
