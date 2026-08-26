from typing import List


class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        total = 0
        streak = 0
        for num in nums:
            if num == 0:
                streak += 1
                total += streak
            else:
                streak = 0
        return total
