from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        total = 0
        for value in nums:
            total ^= value
        mask = total & -total
        first = 0
        for value in nums:
            if value & mask:
                first ^= value
        second = total ^ first
        return sorted([first, second])
