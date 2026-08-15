class Solution {

    public int getPermutationIndex(int[] perm) {
        final long MOD = 1_000_000_007L;
        int n = perm.length;
        long[] fact = new long[n];
        fact[0] = 1;
        for (int i = 1; i < n; i++) {
            fact[i] = (fact[i - 1] * i) % MOD;
        }

        long[] tree = new long[n + 1];

        for (int v = 1; v <= n; v++) {
            for (int i = v; i <= n; i += i & -i) {
                tree[i] += 1;
            }
        }

        long ans = 0;
        for (int i = 0; i < n; i++) {
            int x = perm[i];
            long smaller = 0;
            for (int j = x - 1; j > 0; j -= j & -j) {
                smaller += tree[j];
            }
            ans = (ans + (smaller % MOD) * fact[n - 1 - i]) % MOD;
            for (int j = x; j <= n; j += j & -j) {
                tree[j] -= 1;
            }
        }
        return (int) ans;
    }
}
