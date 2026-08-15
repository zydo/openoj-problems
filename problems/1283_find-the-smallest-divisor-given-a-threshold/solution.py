from typing import List, Optional


class Solution:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        def total(divisor):
            return sum((x + divisor - 1) // divisor for x in nums)

        lo, hi = 1, max(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if total(mid) <= threshold:
                hi = mid
            else:
                lo = mid + 1
        return lo
