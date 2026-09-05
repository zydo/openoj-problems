class Solution {

    public int minimumLargestPile(int[] piles, int maxSplits) {
        // Feasibility is monotone in the penalty, so binary search the
        // smallest feasible value; max(piles) needs zero splits.
        int lo = 1;
        int hi = 0;
        for (int size : piles) {
            hi = Math.max(hi, size);
        }
        while (lo < hi) {
            int mid = (lo + hi) >>> 1;
            if (needed(piles, mid) <= maxSplits) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

    // A pile of v must end as ceil(v/penalty) pieces; each split creates
    // exactly one new pile, so it costs ceil(v/penalty) - 1 = (v - 1) /
    // penalty splits — achievable with near-equal pieces, all of size
    // <= penalty.
    private long needed(int[] piles, int penalty) {
        long total = 0;
        for (int size : piles) {
            total += (size - 1) / penalty;
        }
        return total;
    }
}
