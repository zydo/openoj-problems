from typing import List, Optional


class Solution:
    def numSubseq(self, nums: List[int], target: int) -> int:
        MOD = 10**9 + 7
        nums = sorted(nums)
        n = len(nums)
        powers = [1] * n
        for i in range(1, n):
            powers[i] = powers[i - 1] * 2 % MOD
        total = 0
        lo, hi = 0, n - 1
        while lo <= hi:
            if nums[lo] + nums[hi] <= target:
                total = (total + powers[hi - lo]) % MOD
                lo += 1
            else:
                hi -= 1
        return total
