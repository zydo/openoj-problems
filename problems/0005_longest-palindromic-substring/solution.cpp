class Solution {
  public:
    string longestPalindrome(string s) {
        int n = s.size();
        pair<int, int> best = {0, 0};
        auto expand = [&](int left, int right) {
            while (left >= 0 && right < n && s[left] == s[right]) {
                left--;
                right++;
            }
            return make_pair(left + 1, right - 1);
        };
        for (int i = 0; i < n; i++) {
            pair<int, int> centers[2] = {expand(i, i), expand(i, i + 1)};
            for (auto &[l, r] : centers) {
                if (r - l > best.second - best.first) {
                    best = {l, r};
                }
            }
        }
        return s.substr(best.first, best.second - best.first + 1);
    }
};
