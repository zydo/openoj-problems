class Solution {
  public:
    int findKthNumber(int m, int n, int k) {
        long long lo = 1, hi = (long long)m * n;
        while (lo < hi) {
            long long mid = lo + (hi - lo) / 2;
            if (countAtMost(mid, m, n, k)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return (int)lo;
    }

  private:
    bool countAtMost(long long x, int m, int n, int k) {
        long long total = 0;
        for (int i = 1; i <= m; i++) {
            total += min(x / i, (long long)n);
            if (total >= k) {
                return true;
            }
        }
        return total >= k;
    }
};
