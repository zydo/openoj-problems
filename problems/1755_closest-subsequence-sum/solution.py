from typing import List, Optional
from bisect import bisect_left


def _subset_sums(arr):
    sums = [0]
    for value in arr:
        sums = sums + [s + value for s in sums]
    return sums


class Solution:
    def minAbsDifference(self, nums: List[int], goal: int) -> int:
        half = len(nums) // 2
        left = sorted(_subset_sums(nums[:half]))
        right = _subset_sums(nums[half:])
        best = None
        for s in right:
            need = goal - s
            idx = bisect_left(left, need)
            for j in (idx - 1, idx):
                if 0 <= j < len(left):
                    diff = abs(left[j] + s - goal)
                    if best is None or diff < best:
                        best = diff
        return best
