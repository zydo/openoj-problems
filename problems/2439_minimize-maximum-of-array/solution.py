from typing import List, Optional


class Solution:
    def minimizeArrayValue(self, nums: List[int]) -> int:
        total = 0
        best = 0
        for i, value in enumerate(nums):
            total += value
            candidate = (total + i) // (i + 1)
            if candidate > best:
                best = candidate
        return best
