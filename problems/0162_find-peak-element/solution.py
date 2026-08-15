from typing import List, Optional


class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        n = len(nums)
        for i in range(n):
            left_ok = i == 0 or nums[i] > nums[i - 1]
            right_ok = i == n - 1 or nums[i] > nums[i + 1]
            if left_ok and right_ok:
                return i
        return -1
