from typing import List, Optional


class Solution:
    def missingElement(self, nums: List[int], k: int) -> int:
        n = len(nums)

        def missing(i: int) -> int:
            return nums[i] - nums[0] - i

        if missing(n - 1) < k:
            return nums[-1] + (k - missing(n - 1))
        lo, hi = 0, n - 1
        while lo < hi:
            mid = (lo + hi) // 2
            if missing(mid) >= k:
                hi = mid
            else:
                lo = mid + 1
        return nums[lo - 1] + (k - missing(lo - 1))
