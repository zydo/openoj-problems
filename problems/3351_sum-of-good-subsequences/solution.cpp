class Solution {
  public:
    int sumOfGoodSubsequences(vector<int> &nums) {
        const long long MOD = 1000000007LL;
        // offset by 1 so that value 0 can look up value -1 at index 0
        vector<long long> cnt(100003, 0), sm(100003, 0);
        long long total = 0;
        for (int x : nums) {
            int idx = x + 1;
            long long cPrev = cnt[idx - 1];
            long long cNext = cnt[idx + 1];
            long long sPrev = sm[idx - 1];
            long long sNext = sm[idx + 1];
            long long newCnt = (1 + cPrev + cNext) % MOD;
            long long newSum = ((long long)x * newCnt + sPrev + sNext) % MOD;
            cnt[idx] = (cnt[idx] + newCnt) % MOD;
            sm[idx] = (sm[idx] + newSum) % MOD;
            total = (total + newSum) % MOD;
        }
        return (int)total;
    }
};
