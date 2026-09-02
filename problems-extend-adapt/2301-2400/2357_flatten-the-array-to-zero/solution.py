from typing import List


class Solution:
    def zeroingRounds(self, nums: List[int]) -> int:
        return len({num for num in nums if num > 0})
