class Solution {

    public int minimizedMaximum(int n, int[] quantities) {
        int lo = 1;
        int hi = 0;
        for (int q : quantities) {
            hi = Math.max(hi, q);
        }
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (storesNeeded(quantities, mid) <= n) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

    private long storesNeeded(int[] quantities, int x) {
        long total = 0;
        for (int q : quantities) {
            total += (q + x - 1) / x;
        }
        return total;
    }
}
