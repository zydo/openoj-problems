class Solution {
  public:
    int numberOfSubstrings(string s) {
        int last[3] = {-1, -1, -1};
        long long count = 0;
        for (int i = 0; i < (int)s.size(); i++) {
            int idx = s[i] - 'a';
            if (idx >= 0 && idx <= 2) {
                last[idx] = i;
            }
            count += min({last[0], last[1], last[2]}) + 1;
        }
        return (int)count;
    }
};
