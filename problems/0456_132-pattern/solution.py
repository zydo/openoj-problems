from typing import List, Optional


class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        if len(nums) < 3:
            return False
        stack = []
        third = float("-inf")
        for value in reversed(nums):
            if value < third:
                return True
            while stack and stack[-1] < value:
                third = stack.pop()
            stack.append(value)
        return False
