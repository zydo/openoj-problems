from typing import List, Optional


class Solution:
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        n = len(bloomDay)
        if m * k > n:
            return -1

        def feasible(day):
            bouquets = 0
            run = 0
            for d in bloomDay:
                if d <= day:
                    run += 1
                    if run == k:
                        bouquets += 1
                        run = 0
                else:
                    run = 0
            return bouquets >= m

        lo, hi = min(bloomDay), max(bloomDay)
        while lo < hi:
            mid = (lo + hi) // 2
            if feasible(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
