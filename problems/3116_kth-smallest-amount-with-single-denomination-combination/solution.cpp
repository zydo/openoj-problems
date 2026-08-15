class Solution {
  public:
    long long findKthSmallest(vector<int> &coins, int k) {
        int m = coins.size();

        long long minCoin = coins[0];
        for (int c : coins) {
            if (c < minCoin)
                minCoin = c;
        }

        long long lo = 1, hi = (long long)k * minCoin;
        while (lo < hi) {
            long long mid = lo + (hi - lo) / 2;
            if (countLe(coins, m, mid) >= k) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

  private:
    long long countLe(vector<int> &coins, int m, long long x) {
        long long total = 0;
        for (int mask = 1; mask < (1 << m); mask++) {
            long long l = 1;
            int bits = 0;
            bool overflow = false;
            for (int j = 0; j < m; j++) {
                if (mask >> j & 1) {
                    long long g = gcdEuclid(l, coins[j]);
                    l = l / g * coins[j];
                    bits++;
                    if (l > x) {
                        overflow = true;
                        break;
                    }
                }
            }
            if (overflow) {
                continue;
            }
            if (bits % 2 == 1) {
                total += x / l;
            } else {
                total -= x / l;
            }
        }
        return total;
    }

    long long gcdEuclid(long long a, long long b) {
        while (b != 0) {
            long long t = a % b;
            a = b;
            b = t;
        }
        return a;
    }
};
