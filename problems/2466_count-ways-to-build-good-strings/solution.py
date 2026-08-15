from typing import List, Optional


class Solution:
    def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
        MOD = 10**9 + 7
        dp = [0] * (high + 1)
        dp[0] = 1
        for length in range(1, high + 1):
            ways = 0
            if length >= zero:
                ways += dp[length - zero]
            if length >= one:
                ways += dp[length - one]
            dp[length] = ways % MOD
        return sum(dp[low : high + 1]) % MOD
