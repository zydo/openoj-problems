from typing import List, Optional


class Solution:
    def minimizeMax(self, nums: List[int], p: int) -> int:
        nums = sorted(nums)
        n = len(nums)

        def can(diff):
            count = 0
            i = 1
            while i < n:
                if nums[i] - nums[i - 1] <= diff:
                    count += 1
                    i += 2
                else:
                    i += 1
            return count >= p

        lo, hi = 0, nums[-1] - nums[0]
        while lo < hi:
            mid = (lo + hi) // 2
            if can(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
