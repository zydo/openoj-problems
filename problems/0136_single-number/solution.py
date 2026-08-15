from typing import List, Optional


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        for value in nums:
            result ^= value
        return result
