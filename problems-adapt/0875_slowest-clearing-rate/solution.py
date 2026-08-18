from typing import List, Optional
import math


class Solution:
    def slowestClearingRate(self, batches: List[int], h: int) -> int:
        # Batch p costs ceil(p / k) hours; hours(k) only shrinks as k
        # grows, so feasibility is a threshold.
        def hours_needed(k: int) -> int:
            return sum(math.ceil(batch / k) for batch in batches)

        # Range [1, max(batches)]: the max rate empties any batch in a
        # single hour, and h >= len(batches) makes it always feasible.
        lo, hi = 1, max(batches)
        while lo < hi:
            mid = (lo + hi) // 2
            # Lower-bound bisection: feasible means the answer is mid
            # or smaller; infeasible raises lo. Exiting, lo is the
            # smallest feasible rate.
            if hours_needed(mid) <= h:
                hi = mid
            else:
                lo = mid + 1
        return lo
