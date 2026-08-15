class Solution {

    public int sumOfGoodSubsequences(int[] nums) {
        final int MOD = 1_000_000_007;
        // offset by 1 so that value 0 can look up value -1 at index 0
        long[] cnt = new long[100003];
        long[] sm = new long[100003];
        long total = 0;
        for (int x : nums) {
            int idx = x + 1;
            long cPrev = cnt[idx - 1];
            long cNext = cnt[idx + 1];
            long sPrev = sm[idx - 1];
            long sNext = sm[idx + 1];
            long newCnt = (1 + cPrev + cNext) % MOD;
            long newSum = ((long) x * newCnt + sPrev + sNext) % MOD;
            cnt[idx] = (cnt[idx] + newCnt) % MOD;
            sm[idx] = (sm[idx] + newSum) % MOD;
            total = (total + newSum) % MOD;
        }
        return (int) total;
    }
}
