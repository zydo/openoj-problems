class Solution {
  public:
    int longestValidSubstring(string word, vector<string> &forbidden) {
        unordered_set<string> banned(forbidden.begin(), forbidden.end());
        int maxLen = 0;
        for (const string &s : banned) {
            maxLen = max(maxLen, (int)s.size());
        }
        int n = word.size();
        int left = 0;
        int ans = 0;
        for (int right = 0; right < n; right++) {
            int start = max(right - maxLen, left - 1);
            for (int j = right; j > start; j--) {
                if (banned.count(word.substr(j, right + 1 - j))) {
                    left = j + 1;
                    break;
                }
            }
            ans = max(ans, right - left + 1);
        }
        return ans;
    }
};
