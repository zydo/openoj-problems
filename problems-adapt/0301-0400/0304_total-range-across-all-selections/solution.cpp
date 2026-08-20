class Solution {
  public:
    int totalSelectionRanges(vector<int> &values) {
        const long long MOD = 1000000007LL;
        // Width = max - min, so the total is the sum of subsequence maxes
        // minus mins; sorting loses nothing (inner order is irrelevant).
        sort(values.begin(), values.end());
        int n = values.size();
        vector<long long> pow2(n);
        pow2[0] = 1;
        for (int i = 1; i < n; i++) {
            pow2[i] = pow2[i - 1] * 2 % MOD;
        }
        long long total = 0;
        for (int i = 0; i < n; i++) {
            // values[i] is the max of 2^i subsequences (partners chosen before
            // it) and the min of 2^(n-1-i); each subsequence is booked to
            // exactly one index per role. The extra +MOD repairs the possibly
            // negative difference of the two powers.
            long long d = pow2[i] - pow2[n - 1 - i];
            total = ((total + values[i] * d) % MOD + MOD) % MOD;
        }
        return (int)total;
    }
};
