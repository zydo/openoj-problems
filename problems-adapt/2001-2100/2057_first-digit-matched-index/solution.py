from typing import List


class Solution:
    def firstDigitMatch(self, nums: List[int]) -> int:
        for index, value in enumerate(nums):
            if index % 10 == value:
                return index
        return -1
