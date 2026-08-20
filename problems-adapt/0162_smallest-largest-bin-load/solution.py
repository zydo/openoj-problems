from typing import List, Optional


class Solution:
    def smallestLargestBinLoad(self, n: int, piles: List[int]) -> int:
        def bins_needed(x):
            # A bin holds items from one pile only, so a pile with q items
            # needs ceil(q/x) bins; integer arithmetic avoids floats.
            return sum((q + x - 1) // x for q in piles)

        # Feasibility is monotone in the cap x, so binary-search the smallest
        # feasible one. hi = max(piles) is always feasible (one bin
        # can take an entire pile).
        lo, hi = 1, max(piles)
        # Invariant: lo possibly too small, hi known feasible; the sum check
        # uses <= n since leftover bins may receive nothing.
        while lo < hi:
            mid = (lo + hi) // 2
            if bins_needed(mid) <= n:
                hi = mid
            else:
                lo = mid + 1
        return lo
