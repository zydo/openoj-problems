from typing import List, Optional


class Solution:
    def rob(self, nums: List[int]) -> int:
        prev, cur = 0, 0
        for x in nums:
            prev, cur = cur, max(cur, prev + x)
        return cur
