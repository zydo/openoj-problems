from typing import List, Optional


class Solution:
    def countSubarrays(self, nums: List[int], minK: int, maxK: int) -> int:
        count = 0
        last_bad = -1
        last_min = -1
        last_max = -1
        for i, x in enumerate(nums):
            if x < minK or x > maxK:
                last_bad = i
            if x == minK:
                last_min = i
            if x == maxK:
                last_max = i
            count += max(0, min(last_min, last_max) - last_bad)
        return count
