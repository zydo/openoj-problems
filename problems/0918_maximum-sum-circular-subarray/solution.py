from typing import List, Optional


class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
        total = sum(nums)
        cur_max = best_max = nums[0]
        cur_min = best_min = nums[0]
        for x in nums[1:]:
            cur_max = x + max(cur_max, 0)
            best_max = max(best_max, cur_max)
            cur_min = x + min(cur_min, 0)
            best_min = min(best_min, cur_min)
        if best_max < 0:
            return best_max
        return max(best_max, total - best_min)
