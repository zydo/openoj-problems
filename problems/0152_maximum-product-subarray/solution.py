from typing import List, Optional


class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        best = nums[0]
        cur_max = cur_min = nums[0]
        for value in nums[1:]:
            if value < 0:
                cur_max, cur_min = cur_min, cur_max
            cur_max = max(value, cur_max * value)
            cur_min = min(value, cur_min * value)
            best = max(best, cur_max)
        return best
