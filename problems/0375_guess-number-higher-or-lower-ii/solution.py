from typing import List, Optional


class Solution:
    def getMoneyAmount(self, n: int) -> int:
        dp = [[0] * (n + 2) for _ in range(n + 2)]
        for length in range(2, n + 1):
            for i in range(1, n - length + 2):
                j = i + length - 1
                best = float("inf")
                for guess in range(i, j + 1):
                    cost = guess + max(dp[i][guess - 1], dp[guess + 1][j])
                    if cost < best:
                        best = cost
                dp[i][j] = best
        return dp[1][n]
