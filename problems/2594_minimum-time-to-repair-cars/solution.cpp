class Solution {
  public:
    long long repairCars(vector<int> &ranks, int cars) {
        long long minRank = LLONG_MAX;
        for (int r : ranks) {
            minRank = min(minRank, (long long)r);
        }
        long long lo = 1, hi = minRank * (long long)cars * cars;
        while (lo < hi) {
            long long mid = lo + (hi - lo) / 2;
            if (feasible(ranks, cars, mid)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

  private:
    static bool feasible(vector<int> &ranks, int cars, long long t) {
        long long total = 0;
        for (int r : ranks) {
            total += isqrtll(t / r);
            if (total >= cars) {
                return true;
            }
        }
        return total >= cars;
    }

    static long long isqrtll(long long x) {
        long long r = (long long)sqrtl((long double)x);
        while (r > 0 && r * r > x) {
            r--;
        }
        while ((r + 1) * (r + 1) <= x) {
            r++;
        }
        return r;
    }
};
