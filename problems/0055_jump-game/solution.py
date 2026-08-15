from typing import List, Optional


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        farthest = 0
        last = len(nums) - 1
        for index, reach in enumerate(nums):
            if index > farthest:
                return False
            if index + reach > farthest:
                farthest = index + reach
            if farthest >= last:
                return True
        return True
