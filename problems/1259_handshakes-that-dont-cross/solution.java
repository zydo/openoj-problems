class Solution {

    public int numberOfWays(int numPeople) {
        final long MOD = 1000000007L;
        int m = numPeople / 2;
        long[] catalan = new long[m + 1];
        catalan[0] = 1;
        for (int i = 1; i <= m; i++) {
            long total = 0;
            for (int j = 0; j < i; j++) {
                total = (total + catalan[j] * catalan[i - 1 - j]) % MOD;
            }
            catalan[i] = total;
        }
        return (int) catalan[m];
    }
}
