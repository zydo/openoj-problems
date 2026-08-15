class Solution {
  public:
    int countVowelPermutation(int n) {
        const long long MOD = 1000000007LL;
        long long a = 1, e = 1, i = 1, o = 1, u = 1;
        for (int t = 0; t < n - 1; t++) {
            long long na = (e + i + u) % MOD;
            long long ne = (a + i) % MOD;
            long long ni = (e + o) % MOD;
            long long no = i;
            long long nu = (i + o) % MOD;
            a = na;
            e = ne;
            i = ni;
            o = no;
            u = nu;
        }
        return (int)((a + e + i + o + u) % MOD);
    }
};
