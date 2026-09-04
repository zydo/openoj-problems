class Solution:
    def minimumLargestPile(self, piles: list[int], maxSplits: int) -> int:
        def needed(penalty):
            # A pile of v must end as ceil(v/penalty) pieces; each split
            # creates exactly one new pile, so it costs ceil(v/penalty) - 1 =
            # (v - 1) // penalty splits — achievable with near-equal
            # pieces, all of size <= penalty.
            total = 0
            for size in piles:
                total += (size - 1) // penalty
            return total

        # Feasibility is monotone in the penalty, so binary search the
        # smallest feasible value; max(piles) needs zero splits.
        lo, hi = 1, max(piles)
        while lo < hi:
            mid = (lo + hi) // 2
            if needed(mid) <= maxSplits:
                hi = mid
            else:
                lo = mid + 1
        return lo
