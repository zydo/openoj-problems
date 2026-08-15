class Solution {
  public:
    int numDupDigitsAtMostN(int n) {
        vector<int> digits;
        {
            int t = n;
            while (t > 0) {
                digits.push_back(t % 10);
                t /= 10;
            }
            reverse(digits.begin(), digits.end());
        }
        int length = (int)digits.size();

        long long distinct = 0;
        for (int d = 1; d < length; d++) {
            long long prod = 9;
            for (int i = 1; i < d; i++)
                prod *= (10 - i);
            distinct += prod;
        }

        int usedMask = 0;
        bool repeated = false;
        for (int i = 0; i < length; i++) {
            int digit = digits[i];
            int start = (i == 0) ? 1 : 0;
            long long smaller = 0;
            for (int cand = start; cand < digit; cand++) {
                if (!(usedMask & (1 << cand)))
                    smaller++;
            }
            int remaining = length - i - 1;
            long long perms = 1;
            int avail = 10 - (i + 1);
            for (int r = 0; r < remaining; r++) {
                perms *= avail;
                avail--;
            }
            distinct += smaller * perms;
            if (usedMask & (1 << digit)) {
                repeated = true;
                break;
            }
            usedMask |= (1 << digit);
        }
        if (!repeated)
            distinct += 1;

        return (int)((long long)n - distinct);
    }
};
