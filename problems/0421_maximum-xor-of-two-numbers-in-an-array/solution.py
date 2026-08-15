from typing import List, Optional


class Solution:
    def findMaximumXOR(self, nums: List[int]) -> int:
        best = 0
        mask = 0
        for bit in range(30, -1, -1):
            mask |= 1 << bit
            prefixes = {value & mask for value in nums}
            candidate = best | (1 << bit)
            if any((candidate ^ prefix) in prefixes for prefix in prefixes):
                best = candidate
        return best
