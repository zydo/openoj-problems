class Solution {
  public:
    long long countSubstrings(string s) {
        int n = (int)s.size();
        vector<int> digits(n);
        for (int i = 0; i < n; i++)
            digits[i] = s[i] - '0';
        long long total = 0;
        for (int d = 1; d < 10; d++) {
            vector<long long> cnt(d, 0);
            for (int di : digits) {
                if (di == d) {
                    for (int r = 0; r < d; r++) {
                        if ((r * 10) % d == 0) {
                            total += cnt[r];
                        }
                    }
                    total += 1;
                }
                vector<long long> newCnt(d, 0);
                for (int r = 0; r < d; r++) {
                    if (cnt[r]) {
                        newCnt[(r * 10 + di) % d] += cnt[r];
                    }
                }
                newCnt[di % d] += 1;
                cnt = newCnt;
            }
        }
        return total;
    }
};
