from typing import List, Optional


class Solution:
    def minMoves(self, nums: List[int], limit: int) -> int:
        n = len(nums)
        diff = [0] * (2 * limit + 2)
        for i in range(n // 2):
            a, b = nums[i], nums[n - 1 - i]
            lo, hi = min(a, b), max(a, b)
            diff[2] += 2
            diff[lo + 1] -= 1
            diff[a + b] -= 1
            diff[a + b + 1] += 1
            diff[hi + limit + 1] += 1
        best = float("inf")
        cur = 0
        for target in range(2, 2 * limit + 1):
            cur += diff[target]
            if cur < best:
                best = cur
        return best
