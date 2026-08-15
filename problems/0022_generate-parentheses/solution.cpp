class Solution {
  public:
    vector<string> generateParenthesis(int n) {
        vector<string> result;
        string current;
        backtrack(n, current, 0, 0, result);
        return result;
    }

  private:
    void backtrack(int n, string &current, int openCount, int closeCount, vector<string> &result) {
        if ((int)current.size() == 2 * n) {
            result.push_back(current);
            return;
        }
        if (openCount < n) {
            current.push_back('(');
            backtrack(n, current, openCount + 1, closeCount, result);
            current.pop_back();
        }
        if (closeCount < openCount) {
            current.push_back(')');
            backtrack(n, current, openCount, closeCount + 1, result);
            current.pop_back();
        }
    }
};
