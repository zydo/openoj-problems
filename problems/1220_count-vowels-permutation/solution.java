class Solution {

    public int countVowelPermutation(int n) {
        final int MOD = 1000000007;
        long a = 1,
            e = 1,
            i = 1,
            o = 1,
            u = 1;
        for (int t = 0; t < n - 1; t++) {
            long na = (e + i + u) % MOD;
            long ne = (a + i) % MOD;
            long ni = (e + o) % MOD;
            long no = i;
            long nu = (i + o) % MOD;
            a = na;
            e = ne;
            i = ni;
            o = no;
            u = nu;
        }
        return (int) ((a + e + i + o + u) % MOD);
    }
}
