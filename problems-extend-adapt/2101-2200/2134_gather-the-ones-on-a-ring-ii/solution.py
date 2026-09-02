from typing import List


class Solution:
    def fewestSwaps(self, nums: List[int]) -> int:
        n = len(nums)
        ones = sum(nums)
        window_ones = sum(nums[:ones])
        best = window_ones
        for start in range(1, n):
            window_ones -= nums[start - 1]
            window_ones += nums[(start + ones - 1) % n]
            best = max(best, window_ones)
        return ones - best
