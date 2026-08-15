class Solution {
  public:
    string longestPrefix(string s) {
        int n = s.size();
        vector<int> pi(n, 0);
        int j = 0;
        for (int i = 1; i < n; i++) {
            while (j > 0 && s[i] != s[j]) {
                j = pi[j - 1];
            }
            if (s[i] == s[j]) {
                j++;
            }
            pi[i] = j;
        }
        return n > 0 ? s.substr(0, pi[n - 1]) : "";
    }
};
