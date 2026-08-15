from typing import List, Optional


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        n = len(nums)
        best = n + 1
        window = 0
        left = 0
        for right in range(n):
            window += nums[right]
            while window >= target:
                best = min(best, right - left + 1)
                window -= nums[left]
                left += 1
        return 0 if best == n + 1 else best
