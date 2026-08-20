class Solution {
  public:
    int slowestClearingRate(vector<int> &batches, int h) {
        int lo = 1;
        // Range [1, max(batches)]: the max rate empties any batch in a
        // single hour, and h >= batches.size() makes it always feasible.
        int hi = 0;
        for (int batch : batches) {
            hi = max(hi, batch);
        }
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            // Lower-bound bisection: feasible means the answer is mid
            // or smaller; infeasible raises lo. Exiting, lo is the
            // smallest feasible rate.
            if (hoursNeeded(batches, mid) <= h) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

  private:
    // Batch p costs ceil(p / k) hours; hours(k) only shrinks as k
    // grows, so feasibility is a threshold. Ceil via (p + k - 1) / k
    // with a 64-bit accumulator: the total can reach 10^4 * 10^9.
    long long hoursNeeded(vector<int> &batches, int k) {
        long long total = 0;
        for (int batch : batches) {
            total += (batch + (long long)k - 1) / k;
        }
        return total;
    }
};
