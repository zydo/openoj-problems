from typing import List, Optional


class Solution:
    def minimizedMaximum(self, n: int, quantities: List[int]) -> int:
        def stores_needed(x):
            return sum((q + x - 1) // x for q in quantities)

        lo, hi = 1, max(quantities)
        while lo < hi:
            mid = (lo + hi) // 2
            if stores_needed(mid) <= n:
                hi = mid
            else:
                lo = mid + 1
        return lo
