from typing import List, Optional


class Solution:
    def maximumCandies(self, candies: List[int], k: int) -> int:
        def can(c):
            if c == 0:
                return True
            cnt = 0
            for p in candies:
                cnt += p // c
                if cnt >= k:
                    return True
            return cnt >= k

        lo, hi = 0, max(candies)
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if can(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
