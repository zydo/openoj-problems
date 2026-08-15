from typing import List, Optional


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        best = current = nums[0]
        for value in nums[1:]:
            current = value if current < 0 else current + value
            if current > best:
                best = current
        return best
