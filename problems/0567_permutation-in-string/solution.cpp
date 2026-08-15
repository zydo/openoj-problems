class Solution {
  public:
    bool checkInclusion(string s1, string s2) {
        int m = s1.size();
        int n = s2.size();
        if (m > n) {
            return false;
        }
        array<int, 26> need{};
        array<int, 26> window{};
        for (int i = 0; i < m; i++) {
            need[s1[i] - 'a']++;
            window[s2[i] - 'a']++;
        }
        if (window == need) {
            return true;
        }
        for (int i = m; i < n; i++) {
            window[s2[i] - 'a']++;
            window[s2[i - m] - 'a']--;
            if (window == need) {
                return true;
            }
        }
        return false;
    }
};
