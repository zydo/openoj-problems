class Solution {
  public:
    long long findMaximumNumber(long long k, int x) {
        long long lo = 0, hi = 10000000000000000LL;
        while (priceSum(hi, x) <= k) {
            hi *= 2;
        }
        while (lo + 1 < hi) {
            long long mid = (lo + hi) / 2;
            if (priceSum(mid, x) <= k) {
                lo = mid;
            } else {
                hi = mid;
            }
        }
        return lo;
    }

  private:
    long long priceSum(long long n, int x) {
        long long total = 0;
        int p = x;
        while ((1LL << (p - 1)) <= n) {
            long long b = p - 1;
            long long cycle = 1LL << (b + 1);
            long long full = (n + 1) / cycle;
            long long rem = (n + 1) % cycle;
            long long half = 1LL << b;
            long long extra = rem - half;
            if (extra < 0)
                extra = 0;
            total += full * half + extra;
            p += x;
        }
        return total;
    }
};
