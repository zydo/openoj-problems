class Solution {
  public:
    int findTheLongestSubstring(string s) {
        vector<int> bit(26, 0);
        bit['a' - 'a'] = 1;
        bit['e' - 'a'] = 2;
        bit['i' - 'a'] = 4;
        bit['o' - 'a'] = 8;
        bit['u' - 'a'] = 16;
        vector<int> first(32, -2);
        first[0] = -1;
        int mask = 0;
        int best = 0;
        for (int i = 0; i < (int)s.size(); i++) {
            mask ^= bit[s[i] - 'a'];
            if (first[mask] != -2) {
                best = max(best, i - first[mask]);
            } else {
                first[mask] = i;
            }
        }
        return best;
    }
};
