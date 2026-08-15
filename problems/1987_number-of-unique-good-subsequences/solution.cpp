class Solution {
  public:
    int numberOfUniqueGoodSubsequences(string binary) {
        const long long MOD = 1000000007LL;
        long long end0 = 0;
        long long end1 = 0;
        bool hasZero = false;
        for (char ch : binary) {
            if (ch == '0') {
                end0 = (end0 + end1) % MOD;
                hasZero = true;
            } else {
                end1 = (end1 + end0 + 1) % MOD;
            }
        }
        return (int)((end0 + end1 + (hasZero ? 1 : 0)) % MOD);
    }
};
