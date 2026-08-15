class Solution {

    public int waysToSplit(int[] nums) {
        final int MOD = 1000000007;
        int n = nums.length;
        long[] prefix = new long[n + 1];
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        long total = prefix[n];
        long answer = 0;
        for (int i = 1; i < n - 1; i++) {
            long left = prefix[i];
            int lo = lowerBound(prefix, i + 1, n, 2 * left);
            if (lo >= n) {
                continue;
            }
            int hi = upperBound(prefix, lo, n, (total + left) / 2);
            if (hi > lo) {
                answer = (answer + hi - lo) % MOD;
            }
        }
        return (int) answer;
    }

    private int lowerBound(long[] a, int lo, int hi, long value) {
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] < value) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return lo;
    }

    private int upperBound(long[] a, int lo, int hi, long value) {
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] <= value) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return lo;
    }
}
