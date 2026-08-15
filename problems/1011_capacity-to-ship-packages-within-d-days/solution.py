from typing import List, Optional


class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        def feasible(cap):
            need = 1
            current = 0
            for w in weights:
                if current + w > cap:
                    need += 1
                    if need > days:
                        return False
                    current = w
                else:
                    current += w
            return True

        lo, hi = max(weights), sum(weights)
        while lo < hi:
            mid = (lo + hi) // 2
            if feasible(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
