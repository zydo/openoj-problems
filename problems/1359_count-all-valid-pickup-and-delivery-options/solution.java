class Solution {

    public int countOrders(int n) {
        final long MOD = 1_000_000_007L;
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result = (((result * (2L * i - 1)) % MOD) * i) % MOD;
        }
        return (int) result;
    }
}
