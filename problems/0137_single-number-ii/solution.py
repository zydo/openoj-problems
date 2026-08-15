from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        for i in range(32):
            count = 0
            for value in nums:
                count += (value >> i) & 1
            if count % 3 != 0:
                result |= 1 << i
        if result >= 1 << 31:
            result -= 1 << 32
        return result
