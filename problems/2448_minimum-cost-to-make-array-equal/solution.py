from typing import List, Optional


class Solution:
    def minCost(self, nums: List[int], cost: List[int]) -> int:
        pairs = sorted(zip(nums, cost))
        total = sum(cost)
        target = (total + 1) // 2
        prefix = 0
        median = pairs[-1][0]
        for num, c in pairs:
            prefix += c
            if prefix >= target:
                median = num
                break
        return sum(abs(num - median) * c for num, c in pairs)
