from typing import List, Optional


class Solution:
    def minPatches(self, nums: List[int], n: int) -> int:
        patches = 0
        i = 0
        reachable = 1
        while reachable <= n:
            if i < len(nums) and nums[i] <= reachable:
                reachable += nums[i]
                i += 1
            else:
                reachable += reachable
                patches += 1
        return patches
