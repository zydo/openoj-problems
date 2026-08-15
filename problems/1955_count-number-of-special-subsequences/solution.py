from typing import List, Optional


class Solution:
    def countSpecialSubsequences(self, nums: List[int]) -> int:
        MOD = 10**9 + 7
        f0 = f1 = f2 = 0
        for x in nums:
            if x == 0:
                f0 = (f0 * 2 + 1) % MOD
            elif x == 1:
                f1 = (f1 * 2 + f0) % MOD
            else:
                f2 = (f2 * 2 + f1) % MOD
        return f2
