from typing import List, Optional


class Solution:
    def maxSubArrayLen(self, nums: List[int], k: int) -> int:
        first = {0: -1}
        acc = 0
        best = 0
        for i, x in enumerate(nums):
            acc += x
            j = first.get(acc - k)
            if j is not None and i - j > best:
                best = i - j
            if acc not in first:
                first[acc] = i
        return best
