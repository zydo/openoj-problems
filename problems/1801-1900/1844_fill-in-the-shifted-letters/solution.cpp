class Solution {
  public:
    // shift(c, x) is plain character arithmetic: c + x. Each digit at an
    // odd index pairs with the letter immediately before it.
    string fillShiftedLetters(string s) {
        for (int i = 1; i < s.size(); i += 2) {
            s[i] = s[i - 1] + (s[i] - '0');
        }
        return s;
    }
};
