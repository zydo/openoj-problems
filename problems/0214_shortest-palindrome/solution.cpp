class Solution {
  public:
    string shortestPalindrome(string s) {
        string rev(s.rbegin(), s.rend());
        string combined = s + "#" + rev;
        int n = (int)combined.size();
        vector<int> lps(n, 0);
        for (int i = 1; i < n; i++) {
            int j = lps[i - 1];
            while (j > 0 && combined[i] != combined[j]) {
                j = lps[j - 1];
            }
            if (combined[i] == combined[j]) {
                j++;
            }
            lps[i] = j;
        }
        int palLen = n > 0 ? lps[n - 1] : 0;
        return rev.substr(0, s.size() - palLen) + s;
    }
};
