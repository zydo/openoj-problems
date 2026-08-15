class Solution {
  public:
    int maximumGain(string s, int x, int y) {
        if (x >= y) {
            auto first = removePairs(s, 'a', 'b', x);
            auto second = removePairs(first.second, 'b', 'a', y);
            return first.first + second.first;
        }
        auto first = removePairs(s, 'b', 'a', y);
        auto second = removePairs(first.second, 'a', 'b', x);
        return first.first + second.first;
    }

  private:
    pair<int, string> removePairs(const string &text, char first, char second, int points) {
        string stack;
        int score = 0;
        for (char c : text) {
            if (!stack.empty() && stack.back() == first && c == second) {
                stack.pop_back();
                score += points;
            } else {
                stack.push_back(c);
            }
        }
        return {score, stack};
    }
};
