from typing import List, Optional


class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        nums = sorted(nums)
        total = sum(nums)
        for i in range(len(nums) - 1, 1, -1):
            if total - nums[i] > nums[i]:
                return total
            total -= nums[i]
        return -1
