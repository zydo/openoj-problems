class Solution {
  public:
    int countSubstrings(string s) {
        int n = s.size();
        int count = 0;
        for (int center = 0; center < n; ++center) {
            count += expand(s, center, center);
            count += expand(s, center, center + 1);
        }
        return count;
    }

  private:
    int expand(const string &s, int left, int right) {
        int n = s.size();
        int count = 0;
        while (left >= 0 && right < n && s[left] == s[right]) {
            ++count;
            --left;
            ++right;
        }
        return count;
    }
};
