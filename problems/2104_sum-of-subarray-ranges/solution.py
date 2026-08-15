from typing import List, Optional


class Solution:
    def subArrayRanges(self, nums: List[int]) -> int:
        n = len(nums)
        total = 0
        for i in range(n):
            mn = mx = nums[i]
            for j in range(i + 1, n):
                if nums[j] < mn:
                    mn = nums[j]
                elif nums[j] > mx:
                    mx = nums[j]
                total += mx - mn
        return total
