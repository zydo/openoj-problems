from typing import List, Optional


class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        nums = sorted(nums)
        best = 1
        left = 0
        window_sum = 0
        for right, value in enumerate(nums):
            window_sum += value
            while (right - left + 1) * value - window_sum > k:
                window_sum -= nums[left]
                left += 1
            best = max(best, right - left + 1)
        return best
