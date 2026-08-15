from typing import List, Optional


class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        def needed(penalty):
            total = 0
            for balls in nums:
                total += (balls - 1) // penalty
            return total

        lo, hi = 1, max(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if needed(mid) <= maxOperations:
                hi = mid
            else:
                lo = mid + 1
        return lo
