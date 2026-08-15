class Solution {
  public:
    bool wordBreak(string s, vector<string> &wordDict) {
        unordered_set<string> words(wordDict.begin(), wordDict.end());
        int n = (int)s.size();
        vector<bool> reachable(n + 1, false);
        reachable[0] = true;
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (reachable[j] && words.find(s.substr(j, i - j)) != words.end()) {
                    reachable[i] = true;
                    break;
                }
            }
        }
        return reachable[n];
    }
};
