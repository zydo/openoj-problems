from typing import List, Optional


class Solution:
    def minimumTime(self, power: List[int]) -> int:
        n = len(power)
        full = (1 << n) - 1
        INF = float("inf")
        dp = [INF] * (full + 1)
        dp[0] = 0
        for mask in range(full + 1):
            if dp[mask] == INF:
                continue
            gain = bin(mask).count("1") + 1
            for j in range(n):
                if not mask & (1 << j):
                    days = (power[j] + gain - 1) // gain
                    nxt = mask | (1 << j)
                    if dp[mask] + days < dp[nxt]:
                        dp[nxt] = dp[mask] + days
        return dp[full]
