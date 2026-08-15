class Solution {
  public:
    int beautifulNumbers(int l, int r) { return (int)(countUpTo(r) - countUpTo((long long)l - 1)); }

  private:
    long long countUpTo(long long x) {
        if (x <= 0)
            return 0;
        string s = to_string(x);
        int len = (int)s.size();
        vector<int> digits(len);
        for (int i = 0; i < len; i++)
            digits[i] = s[i] - '0';
        memo_.clear();
        return dp(digits, 0, true, false, 0, 1);
    }

    long long dp(vector<int> &digits, int pos, bool tight, bool started, long long ssum,
                 long long prod) {
        if (pos == (int)digits.size()) {
            return (started && ssum > 0 && prod % ssum == 0) ? 1 : 0;
        }
        long long key = pack(pos, tight, started, ssum, prod);
        auto it = memo_.find(key);
        if (it != memo_.end())
            return it->second;
        int limit = tight ? digits[pos] : 9;
        long long res = 0;
        for (int d = 0; d <= limit; d++) {
            bool nt = tight && (d == limit);
            if (!started && d == 0) {
                res += dp(digits, pos + 1, nt, false, 0, 1);
            } else {
                res += dp(digits, pos + 1, nt, true, ssum + d, prod * d);
            }
        }
        memo_[key] = res;
        return res;
    }

    long long pack(int pos, bool tight, bool started, long long ssum, long long prod) {
        // pos <= 9 (4 bits), tight (1), started (1), ssum <= 90 (7 bits), prod <= 9^10 < 2^32
        long long head =
            ((((long long)pos * 2 + (tight ? 1 : 0)) * 2 + (started ? 1 : 0)) * 128 + ssum);
        return head * (1LL << 32) + prod;
    }

    unordered_map<long long, long long> memo_;
};
