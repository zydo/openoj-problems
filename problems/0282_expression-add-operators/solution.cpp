class Solution {
  public:
    vector<string> addOperators(string num, int target) {
        vector<string> results;
        string expression;
        dfs(num, (long long)target, 0, 0LL, 0LL, expression, results);
        return results;
    }

  private:
    // num.length <= 10, so every operand is < 1e10 and any run of '*'
    // operands stays under ~1e10; the running total never exceeds ~1e11,
    // which fits comfortably in a long long.
    void dfs(const string &num, long long target, int index, long long prev, long long current,
             string &expression, vector<string> &results) {
        int n = (int)num.size();
        if (index == n) {
            if (current == target) {
                results.push_back(expression);
            }
            return;
        }
        long long nxt = 0;
        for (int end = index; end < n; end++) {
            if (end != index && num[index] == '0') {
                break;
            }
            nxt = nxt * 10 + (num[end] - '0');
            size_t lengthBefore = expression.size();
            if (index == 0) {
                expression += to_string(nxt);
                dfs(num, target, end + 1, nxt, nxt, expression, results);
            } else {
                expression += '+';
                expression += to_string(nxt);
                dfs(num, target, end + 1, nxt, current + nxt, expression, results);
                expression.resize(lengthBefore);
                expression += '-';
                expression += to_string(nxt);
                dfs(num, target, end + 1, -nxt, current - nxt, expression, results);
                expression.resize(lengthBefore);
                expression += '*';
                expression += to_string(nxt);
                dfs(num, target, end + 1, prev * nxt, current - prev + prev * nxt, expression,
                    results);
            }
            expression.resize(lengthBefore);
        }
    }
};
