class Solution {
  public:
    long long evaluateExpression(string expression) {
        int pos = 0;
        return parse(expression, pos);
    }

  private:
    long long parse(const string &expr, int &pos) {
        char ch = expr[pos];
        if (ch == '-' || (ch >= '0' && ch <= '9')) {
            int i = pos;
            int j = ch == '-' ? i + 1 : i;
            while (j < (int)expr.size() && expr[j] >= '0' && expr[j] <= '9') {
                j++;
            }
            pos = j;
            return stoll(expr.substr(i, j - i));
        }
        string op = expr.substr(pos, 3);
        pos += 4;
        long long a = parse(expr, pos);
        pos++; // skip ","
        long long b = parse(expr, pos);
        pos++; // skip ")"
        if (op == "add")
            return a + b;
        if (op == "sub")
            return a - b;
        if (op == "mul")
            return a * b;
        return a / b;
    }
};
