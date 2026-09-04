class Solution {
  public:
    long long countBookendSubstrings(string s) {
        long long total = 0;
        long long counts[26] = {};
        for (char character : s) {
            long long &count = counts[character - 'a'];
            ++count;
            total += count;
        }
        return total;
    }
};
