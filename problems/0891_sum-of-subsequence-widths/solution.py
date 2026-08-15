from typing import List, Optional


class Solution:
    def sumSubseqWidths(self, nums: List[int]) -> int:
        MOD = 10**9 + 7
        nums = sorted(nums)
        n = len(nums)
        pow2 = [1] * n
        for i in range(1, n):
            pow2[i] = pow2[i - 1] * 2 % MOD
        total = 0
        for i, x in enumerate(nums):
            total = (total + x * (pow2[i] - pow2[n - 1 - i])) % MOD
        return total
