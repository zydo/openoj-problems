class Solution {
  public:
    int calculate(string s) {
        vector<long long> stack;
        long long num = 0;
        char op = '+';
        int last = (int)s.size() - 1;
        for (int i = 0; i <= last; i++) {
            char ch = s[i];
            if (ch >= '0' && ch <= '9') {
                num = num * 10 + (ch - '0');
            }
            if (ch == '+' || ch == '-' || ch == '*' || ch == '/' || i == last) {
                if (op == '+') {
                    stack.push_back(num);
                } else if (op == '-') {
                    stack.push_back(-num);
                } else if (op == '*') {
                    stack.back() *= num;
                } else {
                    stack.back() /= num;
                }
                op = ch;
                num = 0;
            }
        }
        long long total = 0;
        for (long long value : stack) {
            total += value;
        }
        return (int)total;
    }
};
