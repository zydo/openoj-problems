from typing import List, Optional


class Solution:
    def stoneGameIII(self, stoneValue: List[int]) -> str:
        n = len(stoneValue)
        dp = [0] * (n + 1)
        for i in range(n - 1, -1, -1):
            take = 0
            best = float("-inf")
            for j in range(i, min(i + 3, n)):
                take += stoneValue[j]
                cand = take - dp[j + 1]
                if cand > best:
                    best = cand
            dp[i] = best
        if dp[0] > 0:
            return "Alice"
        if dp[0] < 0:
            return "Bob"
        return "Tie"
