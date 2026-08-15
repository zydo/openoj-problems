class Solution {
  public:
    string decodeString(string s) {
        vector<pair<string, int>> stack;
        string current;
        int repeat = 0;
        for (char ch : s) {
            if (ch >= '0' && ch <= '9') {
                repeat = repeat * 10 + (ch - '0');
            } else if (ch == '[') {
                stack.emplace_back(current, repeat);
                current.clear();
                repeat = 0;
            } else if (ch == ']') {
                auto [previous, times] = stack.back();
                stack.pop_back();
                current = previous + buildRepeat(current, times);
            } else {
                current.push_back(ch);
            }
        }
        return current;
    }

  private:
    string buildRepeat(const string &part, int times) {
        string out;
        out.reserve(part.size() * times);
        for (int t = 0; t < times; t++) {
            out += part;
        }
        return out;
    }
};
