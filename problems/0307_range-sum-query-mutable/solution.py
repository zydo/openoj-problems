from typing import List


class NumArray:
    def __init__(self, nums: List[int]) -> None:
        self.n = len(nums)
        self.nums = list(nums)
        self.tree = [0] * (self.n + 1)
        for index, value in enumerate(nums, 1):
            self.tree[index] += value
            parent = index + (index & -index)
            if parent <= self.n:
                self.tree[parent] += self.tree[index]

    def update(self, index: int, val: int) -> None:
        delta = val - self.nums[index]
        self.nums[index] = val
        position = index + 1
        while position <= self.n:
            self.tree[position] += delta
            position += position & -position

    def sumRange(self, left: int, right: int) -> int:
        return self._prefix(right + 1) - self._prefix(left)

    def _prefix(self, count: int) -> int:
        total = 0
        while count > 0:
            total += self.tree[count]
            count -= count & -count
        return total
