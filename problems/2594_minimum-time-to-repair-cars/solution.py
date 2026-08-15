from typing import List, Optional
from math import isqrt


class Solution:
    def repairCars(self, ranks: List[int], cars: int) -> int:
        def feasible(t):
            total = 0
            for r in ranks:
                total += isqrt(t // r)
                if total >= cars:
                    return True
            return total >= cars

        lo, hi = 1, min(ranks) * cars * cars
        while lo < hi:
            mid = (lo + hi) // 2
            if feasible(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
