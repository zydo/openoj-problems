class Solution {
    long long zeta(long long x) {
        long long count = 0;
        long long p = 5;
        while (p <= x) {
            count += x / p;
            p *= 5;
        }
        return count;
    }

  public:
    int preimageSizeFZF(int k) {
        long long lo = 0;
        long long hi = 5LL * (k + 1) + 10;
        while (lo < hi) {
            long long mid = lo + (hi - lo) / 2;
            if (zeta(mid) < k) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return zeta(lo) == k ? 5 : 0;
    }
};
