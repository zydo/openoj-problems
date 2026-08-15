from typing import List, Optional


class Solution:
    def sortColors(self, nums: List[int]) -> List[int]:
        counts = [0, 0, 0]
        for value in nums:
            counts[value] += 1
        index = 0
        for color in range(3):
            for _ in range(counts[color]):
                nums[index] = color
                index += 1
        return nums
