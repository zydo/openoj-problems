class Solution {
  public:
    vector<string> removeInvalidParentheses(string s) {
        auto isValid = [](const string &str) {
            int count = 0;
            for (char ch : str) {
                if (ch == '(')
                    count++;
                else if (ch == ')') {
                    count--;
                    if (count < 0)
                        return false;
                }
            }
            return count == 0;
        };
        unordered_set<string> level;
        level.insert(s);
        while (true) {
            vector<string> valid;
            for (const string &item : level) {
                if (isValid(item))
                    valid.push_back(item);
            }
            if (!valid.empty()) {
                sort(valid.begin(), valid.end());
                return valid;
            }
            unordered_set<string> next;
            for (const string &item : level) {
                for (int i = 0; i < (int)item.size(); i++) {
                    char ch = item[i];
                    if (ch == '(' || ch == ')') {
                        next.insert(item.substr(0, i) + item.substr(i + 1));
                    }
                }
            }
            level = std::move(next);
        }
    }
};
