class Solution {
  public:
    bool containsAnagram(string pattern, string text) {
        int m = pattern.size();
        int n = text.size();
        // No window of length m can exist inside a shorter text.
        if (m > n) {
            return false;
        }
        array<int, 26> need{};
        array<int, 26> window{};
        for (int i = 0; i < m; i++) {
            need[pattern[i] - 'a']++;
            window[text[i] - 'a']++;
        }
        // Matching frequency vectors means the window is a permutation of pattern.
        if (window == need) {
            return true;
        }
        for (int i = m; i < n; i++) {
            // Slide one position: add the entering char, drop the leaving one.
            window[text[i] - 'a']++;
            window[text[i - m] - 'a']--;
            if (window == need) {
                return true;
            }
        }
        return false;
    }
};
