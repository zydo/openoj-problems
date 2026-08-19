class Solution {
  public:
    long long leastTime(vector<int> &factors, int jobs) {
        long long minRank = LLONG_MAX;
        for (int r : factors) {
            minRank = min(minRank, (long long)r);
        }
        // Feasibility is monotone in t (mechanics can idle), so binary search
        // the minimum feasible time. Upper bound: the best mechanic repairing
        // every car alone, min(factors) * jobs^2.
        long long lo = 1, hi = minRank * (long long)jobs * jobs;
        while (lo < hi) {
            long long mid = lo + (hi - lo) / 2;
            if (feasible(factors, jobs, mid)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

  private:
    static bool feasible(vector<int> &factors, int jobs, long long t) {
        // Within budget t, a rank-r mechanic finishes r*n^2 <= t jobs, so its
        // capacity is isqrt(t / r); the check sums capacities and exits early
        // once the demand is covered.
        long long total = 0;
        for (int r : factors) {
            total += isqrtll(t / r);
            if (total >= jobs) {
                return true;
            }
        }
        return total >= jobs;
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
