class Solution {
  public:
    int countPalindromicSubsequence(string s) {
        int count = 0;
        for (char ch = 'a'; ch <= 'z'; ch++) {
            int first = s.find(ch);
            int last = s.rfind(ch);
            if (first != -1 && last - first >= 2) {
                vector<bool> seen(26, false);
                for (int i = first + 1; i < last; i++)
                    seen[s[i] - 'a'] = true;
                count += count_if(seen.begin(), seen.end(), [](bool b) { return b; });
            }
        }
        return count;
    }
};
