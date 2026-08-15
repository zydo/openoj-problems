import java.util.Arrays;

class Solution {

    public long maxSubarraySum(int[] nums, int k) {
        int n = nums.length;
        long[] prefix = new long[n + 1];
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        long[] minPref = new long[k];
        Arrays.fill(minPref, Long.MAX_VALUE);
        long best = Long.MIN_VALUE;
        for (int i = 0; i <= n; i++) {
            int r = i % k;
            if (minPref[r] != Long.MAX_VALUE) {
                long cand = prefix[i] - minPref[r];
                if (cand > best) {
                    best = cand;
                }
            }
            if (prefix[i] < minPref[r]) {
                minPref[r] = prefix[i];
            }
        }
        return best;
    }
}
