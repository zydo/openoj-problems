class Solution {

    public int numberOfUniqueGoodSubsequences(String binary) {
        final int MOD = 1000000007;
        long end0 = 0;
        long end1 = 0;
        boolean hasZero = false;
        for (int i = 0; i < binary.length(); i++) {
            if (binary.charAt(i) == '0') {
                end0 = (end0 + end1) % MOD;
                hasZero = true;
            } else {
                end1 = (end1 + end0 + 1) % MOD;
            }
        }
        return (int) ((end0 + end1 + (hasZero ? 1 : 0)) % MOD);
    }
}
