class Solution {
  public:
    int digitsCount(int d, int low, int high) {
        return (int)(countUpTo(d, (long long)high) - countUpTo(d, (long long)low - 1));
    }

  private:
    long long countUpTo(int d, long long n) {
        if (n <= 0) {
            return 0;
        }
        string s = to_string(n);
        int length = s.size();
        long long total = 0;
        for (int i = 0; i < length; i++) {
            long long highPart = i > 0 ? stoll(s.substr(0, i)) : 0;
            int cur = s[i] - '0';
            long long lowPart = i + 1 < length ? stoll(s.substr(i + 1)) : 0;
            long long power = 1;
            for (int k = 0; k < length - 1 - i; k++) {
                power *= 10;
            }
            if (d == 0) {
                if (highPart >= 1) {
                    if (cur > 0) {
                        total += highPart * power;
                    } else {
                        total += (highPart - 1) * power + lowPart + 1;
                    }
                }
            } else {
                if (cur > d) {
                    total += (highPart + 1) * power;
                } else if (cur == d) {
                    total += highPart * power + lowPart + 1;
                } else {
                    total += highPart * power;
                }
            }
        }
        return total;
    }
};
