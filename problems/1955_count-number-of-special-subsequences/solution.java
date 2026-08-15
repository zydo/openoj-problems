class Solution {

    public int countSpecialSubsequences(int[] nums) {
        final int MOD = 1000000007;
        long f0 = 0,
            f1 = 0,
            f2 = 0;
        for (int x : nums) {
            if (x == 0) {
                f0 = (f0 * 2 + 1) % MOD;
            } else if (x == 1) {
                f1 = (f1 * 2 + f0) % MOD;
            } else {
                f2 = (f2 * 2 + f1) % MOD;
            }
        }
        return (int) f2;
    }
}
