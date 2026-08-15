import java.util.Arrays;

class Solution {

    public int numSubseq(int[] nums, int target) {
        final int MOD = 1_000_000_007;
        Arrays.sort(nums);
        int n = nums.length;
        long[] powers = new long[n];
        powers[0] = 1;
        for (int i = 1; i < n; i++) {
            powers[i] = (powers[i - 1] * 2) % MOD;
        }
        long total = 0;
        int lo = 0,
            hi = n - 1;
        while (lo <= hi) {
            if (nums[lo] + nums[hi] <= target) {
                total = (total + powers[hi - lo]) % MOD;
                lo++;
            } else {
                hi--;
            }
        }
        return (int) total;
    }
}
