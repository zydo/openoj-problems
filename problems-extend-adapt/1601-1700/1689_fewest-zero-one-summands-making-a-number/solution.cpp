class Solution {
  public:
    int fewestSummands(string n) {
        // Every zero-one summand contributes at most 1 to any one digit
        // position, so k summands leave every digit <= k — the answer is at
        // least the largest digit. Subtracting one zero-one layer per pass
        // (a 1 under every still-positive digit) attains that bound exactly,
        // so the answer is the largest digit: scan for it.
        int best = 0;
        for (char ch : n) {
            int digit = ch - '0';
            if (digit > best) {
                best = digit;
            }
        }
        return best;
    }
};
