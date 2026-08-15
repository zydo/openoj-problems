class Solution {
  public:
    int numberOfBeautifulIntegers(int low, int high, int k) {
        return (int)(countUpTo(high, k) - countUpTo(low - 1, k));
    }

  private:
    long long dp(int pos, int tight, int started, int balance, int mod, const vector<int> &digits,
                 int k, vector<long long> &memo) {
        int len = (int)digits.size();
        if (pos == len) {
            return (started == 1 && balance == 0 && mod == 0) ? 1 : 0;
        }
        long long key =
            (long long)(((pos * 2 + tight) * 2 + started) * 21 + balance + 10) * k + mod;
        if (memo[key] >= 0)
            return memo[key];
        int limit = tight == 1 ? digits[pos] : 9;
        long long total = 0;
        for (int d = 0; d <= limit; d++) {
            int nextTight = (tight == 1 && d == limit) ? 1 : 0;
            if (started == 0 && d == 0) {
                total += dp(pos + 1, nextTight, 0, balance, (mod * 10 + d) % k, digits, k, memo);
            } else {
                int newBalance = balance + (d % 2 == 1 ? 1 : -1);
                total += dp(pos + 1, nextTight, 1, newBalance, (mod * 10 + d) % k, digits, k, memo);
            }
        }
        memo[key] = total;
        return total;
    }

    long long countUpTo(long long n, int k) {
        if (n <= 0)
            return 0;
        string str = to_string(n);
        int len = (int)str.size();
        vector<int> digits(len);
        for (int i = 0; i < len; i++)
            digits[i] = str[i] - '0';
        // states: pos(<=10) x tight(2) x started(2) x balance+10(21) x mod(k)
        vector<long long> memo((long long)11 * 2 * 2 * 21 * k, -1);
        return dp(0, 1, 0, 0, 0, digits, k, memo);
    }
};
