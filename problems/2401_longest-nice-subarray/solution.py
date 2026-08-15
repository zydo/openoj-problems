from typing import List, Optional


class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        best = 1
        left = 0
        window_or = 0
        for right, value in enumerate(nums):
            while window_or & value:
                window_or ^= nums[left]
                left += 1
            window_or |= value
            if right - left + 1 > best:
                best = right - left + 1
        return best
