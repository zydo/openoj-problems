from typing import List, Optional


class Solution:
    def dieSimulator(self, n: int, rollMax: List[int]) -> int:
        MOD = 10**9 + 7
        dp = [[0] * 16 for _ in range(6)]
        for j in range(6):
            dp[j][1] = 1
        for _ in range(2, n + 1):
            nxt = [[0] * 16 for _ in range(6)]
            totals = [sum(dp[j]) for j in range(6)]
            grand = sum(totals)
            for j in range(6):
                limit = rollMax[j]
                for c in range(2, limit + 1):
                    nxt[j][c] = dp[j][c - 1]
                nxt[j][1] = (grand - totals[j]) % MOD
            dp = nxt
        return sum(sum(row) for row in dp) % MOD
