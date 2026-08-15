from typing import List, Optional


class Solution:
    def sumOfPower(self, nums: List[int]) -> int:
        MOD = 10**9 + 7
        nums = sorted(nums)
        ans = 0
        s = 0
        for x in nums:
            ans = (ans + (x * x % MOD) * ((s + x) % MOD)) % MOD
            s = (2 * s + x) % MOD
        return ans
