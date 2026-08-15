from typing import List, Optional
import math


class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        def hours_needed(k: int) -> int:
            return sum(math.ceil(pile / k) for pile in piles)

        lo, hi = 1, max(piles)
        while lo < hi:
            mid = (lo + hi) // 2
            if hours_needed(mid) <= h:
                hi = mid
            else:
                lo = mid + 1
        return lo
