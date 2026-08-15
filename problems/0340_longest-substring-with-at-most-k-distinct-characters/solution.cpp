class Solution {
  public:
    int lengthOfLongestSubstringKDistinct(string s, int k) {
        unordered_map<char, int> counts;
        int left = 0;
        int best = 0;
        for (int right = 0; right < (int)s.size(); ++right) {
            counts[s[right]]++;
            while ((int)counts.size() > k) {
                char c = s[left];
                if (--counts[c] == 0) {
                    counts.erase(c);
                }
                ++left;
            }
            if (right - left + 1 > best) {
                best = right - left + 1;
            }
        }
        return best;
    }
};
