class Solution {
  public:
    int calculate(string s) {
        long long result = 0;
        long long sign = 1;
        long long num = 0;
        vector<long long> stack;
        for (char ch : s) {
            if (ch >= '0' && ch <= '9') {
                num = num * 10 + (ch - '0');
            } else if (ch == '+') {
                result += sign * num;
                num = 0;
                sign = 1;
            } else if (ch == '-') {
                result += sign * num;
                num = 0;
                sign = -1;
            } else if (ch == '(') {
                stack.push_back(result);
                stack.push_back(sign);
                result = 0;
                sign = 1;
            } else if (ch == ')') {
                result += sign * num;
                num = 0;
                sign = stack.back();
                stack.pop_back();
                result = result * sign + stack.back();
                stack.pop_back();
            }
            // spaces are ignored
        }
        return (int)(result + sign * num);
    }
};
