class Solution {
  public:
    vector<vector<string>> partition(string s) {
        int n = (int)s.size();
        vector<vector<bool>> isPal(n, vector<bool>(n, false));
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (s[i] == s[j] && (j - i < 2 || isPal[i + 1][j - 1])) {
                    isPal[i][j] = true;
                }
            }
        }

        vector<vector<string>> result;
        vector<string> current;
        backtrack(s, 0, isPal, current, result);
        return result;
    }

  private:
    void backtrack(const string &s, int start, const vector<vector<bool>> &isPal,
                   vector<string> &current, vector<vector<string>> &result) {
        if (start == (int)s.size()) {
            result.push_back(current);
            return;
        }
        for (int end = start; end < (int)s.size(); end++) {
            if (isPal[start][end]) {
                current.push_back(s.substr(start, end - start + 1));
                backtrack(s, end + 1, isPal, current, result);
                current.pop_back();
            }
        }
    }
};
