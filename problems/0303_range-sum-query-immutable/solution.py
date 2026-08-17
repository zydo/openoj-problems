from typing import List


class NumArray:
    def __init__(self, nums: List[int]) -> None:
        self.prefix = [0] * (len(nums) + 1)
        for index, value in enumerate(nums):
            self.prefix[index + 1] = self.prefix[index] + value

    def sumRange(self, left: int, right: int) -> int:
        return self.prefix[right + 1] - self.prefix[left]
