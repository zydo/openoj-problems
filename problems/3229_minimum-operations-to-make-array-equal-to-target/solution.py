from typing import List


class Solution:
    def minimumOperations(self, nums: List[int], target: List[int]) -> int:
        prev = 0
        total = 0
        for a, b in zip(nums, target):
            cur = a - b
            if cur > prev:
                total += cur - prev
            prev = cur
        if prev < 0:
            total += -prev
        return total
