from typing import List, Optional
from fractions import Fraction
from math import ceil


class Solution:
    def minSpeedOnTime(self, dist: List[int], hour: float) -> int:
        n = len(dist)
        budget = Fraction(str(hour))

        def on_time(speed):
            total = sum(ceil(Fraction(d, speed)) for d in dist[:-1])
            total += Fraction(dist[-1], speed)
            return total <= budget

        lo, hi = 1, 10**7
        if not on_time(hi):
            return -1
        while lo < hi:
            mid = (lo + hi) // 2
            if on_time(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
