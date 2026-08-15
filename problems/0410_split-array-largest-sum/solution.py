from typing import List, Optional


class Solution:
    def splitArray(self, nums: List[int], k: int) -> int:
        def feasible(limit):
            pieces, current = 1, 0
            for value in nums:
                if current + value > limit:
                    pieces += 1
                    current = value
                    if pieces > k:
                        return False
                else:
                    current += value
            return True

        lo, hi = max(nums), sum(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if feasible(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
