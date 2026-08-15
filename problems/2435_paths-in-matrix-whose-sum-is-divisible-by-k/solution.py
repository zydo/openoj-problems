from typing import List, Optional


class Solution:
    def numberOfPaths(self, grid: List[List[int]], k: int) -> int:
        MOD = 10**9 + 7
        m = len(grid)
        n = len(grid[0])
        dp = [None] * n
        for i in range(m):
            for j in range(n):
                g = grid[i][j] % k
                if i == 0 and j == 0:
                    first = [0] * k
                    first[g] = 1
                    dp[j] = first
                    continue
                cur = [0] * k
                if i > 0 and dp[j] is not None:
                    above = dp[j]
                    for v in range(k):
                        cur[v] = above[(v - g) % k]
                if j > 0 and dp[j - 1] is not None:
                    left = dp[j - 1]
                    for v in range(k):
                        cur[v] = (cur[v] + left[(v - g) % k]) % MOD
                dp[j] = cur
        return dp[n - 1][0] % MOD
