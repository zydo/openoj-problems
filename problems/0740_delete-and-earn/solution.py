from typing import List, Optional


class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        count = {}
        for v in nums:
            count[v] = count.get(v, 0) + 1
        take = 0
        skip = 0
        prev_value = None
        for value in sorted(count):
            base = skip if prev_value == value - 1 else max(take, skip)
            take, skip = base + value * count[value], max(take, skip)
            prev_value = value
        return max(take, skip)
