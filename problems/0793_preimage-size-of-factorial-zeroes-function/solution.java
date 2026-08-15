class Solution {

    private long zeta(long x) {
        long count = 0;
        long p = 5;
        while (p <= x) {
            count += x / p;
            p *= 5;
        }
        return count;
    }

    public int preimageSizeFZF(int k) {
        long lo = 0;
        long hi = 5L * (k + 1) + 10;
        while (lo < hi) {
            long mid = lo + (hi - lo) / 2;
            if (zeta(mid) < k) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return zeta(lo) == k ? 5 : 0;
    }
}
