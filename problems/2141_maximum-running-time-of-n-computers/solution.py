from typing import List, Optional


class Solution:
    def maxRunTime(self, n: int, batteries: List[int]) -> int:
        def feasible(t):
            return sum(min(b, t) for b in batteries) >= n * t

        lo, hi = 0, sum(batteries) // n
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if feasible(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
