from typing import List, Optional


class Solution:
    def countPaths(self, grid: List[List[int]]) -> int:
        MOD = 10**9 + 7
        m, n = len(grid), len(grid[0])
        cells = sorted(
            ((grid[i][j], i, j) for i in range(m) for j in range(n)),
            reverse=True,
        )
        dp = [[1] * n for _ in range(m)]
        for v, i, j in cells:
            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                ni, nj = i + di, j + dj
                if 0 <= ni < m and 0 <= nj < n and grid[ni][nj] > v:
                    dp[i][j] = (dp[i][j] + dp[ni][nj]) % MOD
        return sum(sum(row) for row in dp) % MOD
