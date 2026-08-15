from typing import List, Optional


class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        counts = {}
        window_sum = 0
        best = 0
        for i, value in enumerate(nums):
            counts[value] = counts.get(value, 0) + 1
            window_sum += value
            if i >= k:
                old = nums[i - k]
                counts[old] -= 1
                if counts[old] == 0:
                    del counts[old]
                window_sum -= old
            if i >= k - 1 and len(counts) == k:
                if window_sum > best:
                    best = window_sum
        return best
