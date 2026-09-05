from typing import List


class Solution:
    def topKInOrder(self, nums: List[int], k: int) -> List[int]:
        chosen = sorted(range(len(nums)), key=lambda index: (-nums[index], index))[:k]
        chosen.sort()
        return [nums[index] for index in chosen]
