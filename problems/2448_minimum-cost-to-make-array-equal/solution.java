class Solution {

    public long minCost(int[] nums, int[] cost) {
        int n = nums.length;
        long[][] pairs = new long[n][2];
        for (int i = 0; i < n; i++) {
            pairs[i][0] = nums[i];
            pairs[i][1] = cost[i];
        }
        java.util.Arrays.sort(pairs, (a, b) -> Long.compare(a[0], b[0]));
        long total = 0;
        for (long[] p : pairs) total += p[1];
        long target = (total + 1) / 2;
        long prefix = 0;
        long median = pairs[n - 1][0];
        for (long[] p : pairs) {
            prefix += p[1];
            if (prefix >= target) {
                median = p[0];
                break;
            }
        }
        long ans = 0;
        for (long[] p : pairs) {
            ans += Math.abs(p[0] - median) * p[1];
        }
        return ans;
    }
}
