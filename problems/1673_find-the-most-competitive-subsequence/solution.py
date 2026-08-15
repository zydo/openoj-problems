from typing import List, Optional


class Solution:
    def mostCompetitive(self, nums: List[int], k: int) -> List[int]:
        stack = []
        n = len(nums)
        for i, value in enumerate(nums):
            remaining = n - i
            while stack and stack[-1] > value and len(stack) + remaining > k:
                stack.pop()
            if len(stack) < k:
                stack.append(value)
        return stack
