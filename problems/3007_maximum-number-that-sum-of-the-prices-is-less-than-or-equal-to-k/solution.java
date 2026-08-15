class Solution {

    public long findMaximumNumber(long k, int x) {
        long lo = 0,
            hi = 10_000_000_000_000_000L;
        while (priceSum(hi, x) <= k) {
            hi *= 2;
        }
        while (lo + 1 < hi) {
            long mid = (lo + hi) / 2;
            if (priceSum(mid, x) <= k) {
                lo = mid;
            } else {
                hi = mid;
            }
        }
        return lo;
    }

    private long priceSum(long n, int x) {
        long total = 0;
        int p = x;
        while (1L << (p - 1) <= n) {
            long b = p - 1;
            long cycle = 1L << (b + 1);
            long full = (n + 1) / cycle;
            long rem = (n + 1) % cycle;
            long half = 1L << b;
            total += full * half + Math.max(0, rem - half);
            p += x;
        }
        return total;
    }
}
