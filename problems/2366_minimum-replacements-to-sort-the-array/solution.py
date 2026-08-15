from typing import List, Optional


class Solution:
    def minimumReplacement(self, nums: List[int]) -> int:
        ops = 0
        bound = nums[-1]
        for x in reversed(nums[:-1]):
            if x <= bound:
                bound = x
            else:
                k = (x + bound - 1) // bound
                ops += k - 1
                bound = x // k
        return ops
