class Solution {
  public:
    string minWindow(string s, string t) {
        if (t.empty() || t.size() > s.size())
            return "";
        unordered_map<char, int> need;
        for (char ch : t) {
            need[ch]++;
        }
        int missing = t.size();
        int bestStart = 0, bestLen = INT_MAX;
        size_t left = 0;
        for (size_t right = 0; right < s.size(); right++) {
            char ch = s[right];
            if (need.count(ch) && need[ch] > 0)
                missing--;
            need[ch]--;
            if (missing == 0) {
                while (left < right && need[s[left]] < 0) {
                    need[s[left]]++;
                    left++;
                }
                if ((int)(right - left + 1) < bestLen) {
                    bestStart = left;
                    bestLen = right - left + 1;
                }
                need[s[left]]++;
                missing++;
                left++;
            }
        }
        return bestLen == INT_MAX ? "" : s.substr(bestStart, bestLen);
    }
};
