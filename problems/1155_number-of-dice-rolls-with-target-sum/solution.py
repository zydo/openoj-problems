from typing import List, Optional


class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
        MOD = 10**9 + 7
        dp = [0] * (target + 1)
        dp[0] = 1
        for _ in range(n):
            ndp = [0] * (target + 1)
            for t in range(1, target + 1):
                s = 0
                for f in range(1, min(k, t) + 1):
                    s += dp[t - f]
                ndp[t] = s % MOD
            dp = ndp
        return dp[target]
