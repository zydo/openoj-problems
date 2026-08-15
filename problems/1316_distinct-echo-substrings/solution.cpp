class Solution {
  public:
    int distinctEchoSubstrings(string text) {
        int n = text.size();
        unordered_set<string> seen;
        for (int half = 1; half <= n / 2; half++) {
            for (int i = 0; i + 2 * half <= n; i++) {
                if (text.compare(i, half, text, i + half, half) == 0) {
                    seen.insert(text.substr(i, 2 * half));
                }
            }
        }
        return seen.size();
    }
};
