from typing import List, Optional


class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
        position = sorted(position)

        def feasible(distance: int) -> bool:
            count = 1
            last = position[0]
            for p in position[1:]:
                if p - last >= distance:
                    count += 1
                    last = p
                    if count >= m:
                        return True
            return count >= m

        lo, hi = 1, position[-1] - position[0]
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if feasible(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
