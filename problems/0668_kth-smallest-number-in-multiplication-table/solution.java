class Solution {

    public int findKthNumber(int m, int n, int k) {
        long lo = 1,
            hi = (long) m * n;
        while (lo < hi) {
            long mid = (lo + hi) >>> 1;
            if (countAtMost(mid, m, n, k)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return (int) lo;
    }

    private boolean countAtMost(long x, int m, int n, int k) {
        long total = 0;
        for (int i = 1; i <= m; i++) {
            total += Math.min(x / i, n);
            if (total >= k) {
                return true;
            }
        }
        return total >= k;
    }
}
