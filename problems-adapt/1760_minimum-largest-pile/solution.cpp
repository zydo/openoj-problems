class Solution {
  public:
    int minimumLargestPile(vector<int> &piles, int maxSplits) {
        // A pile of v must end as ceil(v/penalty) pieces; each split
        // creates exactly one new pile, so it costs ceil(v/penalty) - 1 =
        // (v - 1) / penalty splits — achievable with near-equal pieces,
        // all of size <= penalty.
        auto needed = [&](int penalty) {
            long long total = 0;
            for (int size : piles) {
                total += (size - 1) / penalty;
            }
            return total;
        };

        // Feasibility is monotone in the penalty, so binary search the
        // smallest feasible value; max(piles) needs zero splits.
        int lo = 1;
        int hi = *max_element(piles.begin(), piles.end());
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (needed(mid) <= maxSplits) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }
};
