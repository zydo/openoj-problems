from typing import List, Optional


class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = 0
        zeros = 0
        best = 0
        for right, value in enumerate(nums):
            if value == 0:
                zeros += 1
            while zeros > k:
                if nums[left] == 0:
                    zeros -= 1
                left += 1
            if right - left + 1 > best:
                best = right - left + 1
        return best
