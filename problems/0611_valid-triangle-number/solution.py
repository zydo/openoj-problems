from typing import List, Optional


class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        nums = sorted(nums)
        n = len(nums)
        count = 0
        for i in range(n - 1, 1, -1):
            if nums[i] == 0:
                break
            lo, hi = 0, i - 1
            while lo < hi:
                if nums[lo] + nums[hi] > nums[i]:
                    count += hi - lo
                    hi -= 1
                else:
                    lo += 1
        return count
