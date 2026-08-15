class Solution {
  public:
    int numberOfWays(int numPeople) {
        const long long MOD = 1000000007LL;
        int m = numPeople / 2;
        vector<long long> catalan(m + 1, 0);
        catalan[0] = 1;
        for (int i = 1; i <= m; i++) {
            long long total = 0;
            for (int j = 0; j < i; j++) {
                total = (total + catalan[j] * catalan[i - 1 - j]) % MOD;
            }
            catalan[i] = total;
        }
        return (int)catalan[m];
    }
};
