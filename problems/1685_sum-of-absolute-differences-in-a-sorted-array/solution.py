from typing import List, Optional


class Solution:
    def getSumAbsoluteDifferences(self, nums: List[int]) -> List[int]:
        n = len(nums)
        total = sum(nums)
        prefix = 0
        result = []
        for i, x in enumerate(nums):
            left = x * i - prefix
            suffix = total - prefix - x
            right = suffix - x * (n - i - 1)
            result.append(left + right)
            prefix += x
        return result
