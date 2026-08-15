class Solution {
  public:
    int longestSubstring(string s, int k) { return longest(s, 0, (int)s.size(), k); }

  private:
    int longest(const string &s, int lo, int hi, int k) {
        if (lo >= hi)
            return 0;
        int counts[128] = {0};
        for (int i = lo; i < hi; i++) {
            counts[(unsigned char)s[i]]++;
        }
        bool allFrequent = true;
        for (int c = 0; c < 128; c++) {
            if (counts[c] > 0 && counts[c] < k) {
                allFrequent = false;
                break;
            }
        }
        if (allFrequent)
            return hi - lo;
        int best = 0;
        int start = lo;
        for (int i = lo; i < hi; i++) {
            if (counts[(unsigned char)s[i]] < k) {
                best = max(best, longest(s, start, i, k));
                start = i + 1;
            }
        }
        best = max(best, longest(s, start, hi, k));
        return best;
    }
};
