class Solution {
  public:
    int countVisibleStars(string s) {
        int count = 0;
        bool inside = false;
        for (char ch : s) {
            if (ch == '|') {
                inside = !inside;
            } else if (!inside && ch == '*') {
                count++;
            }
        }
        return count;
    }
};
