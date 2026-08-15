class Solution {
  public:
    int minCut(string s) {
        int n = (int)s.size();
        vector<int> cut(n + 1);
        for (int i = 0; i <= n; ++i) {
            cut[i] = i - 1;
        }
        for (int c = 0; c < n; ++c) {
            for (int l = c, r = c; l >= 0 && r < n && s[l] == s[r]; --l, ++r) {
                cut[r + 1] = min(cut[r + 1], cut[l] + 1);
            }
            for (int l = c, r = c + 1; l >= 0 && r < n && s[l] == s[r]; --l, ++r) {
                cut[r + 1] = min(cut[r + 1], cut[l] + 1);
            }
        }
        return cut[n];
    }
};
