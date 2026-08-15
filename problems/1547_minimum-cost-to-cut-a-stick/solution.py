from typing import List, Optional


class Solution:
    def minCost(self, n: int, cuts: List[int]) -> int:
        positions = sorted(cuts + [0, n])
        size = len(positions)
        dp = [[0] * size for _ in range(size)]
        for length in range(2, size):
            for i in range(size - length):
                j = i + length
                best = float("inf")
                for k in range(i + 1, j):
                    if dp[i][k] + dp[k][j] < best:
                        best = dp[i][k] + dp[k][j]
                dp[i][j] = best + (positions[j] - positions[i])
        return dp[0][size - 1]
