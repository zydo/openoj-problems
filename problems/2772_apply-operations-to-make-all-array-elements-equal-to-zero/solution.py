from typing import List, Optional


class Solution:
    def checkArray(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        diff = [0] * (n + 1)
        running = 0
        for i in range(n):
            running += diff[i]
            cur = nums[i] - running
            if cur < 0:
                return False
            if cur == 0:
                continue
            if i + k > n:
                return False
            running += cur
            diff[i + k] -= cur
        return True
