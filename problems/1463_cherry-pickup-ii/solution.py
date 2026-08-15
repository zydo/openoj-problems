from typing import List, Optional


class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        NEG = float("-inf")
        dp = [[NEG] * cols for _ in range(cols)]
        dp[0][cols - 1] = grid[0][0] + (grid[0][cols - 1] if cols > 1 else 0)
        for r in range(1, rows):
            ndp = [[NEG] * cols for _ in range(cols)]
            for c1 in range(cols):
                for c2 in range(cols):
                    best = NEG
                    for d1 in (-1, 0, 1):
                        for d2 in (-1, 0, 1):
                            p1, p2 = c1 + d1, c2 + d2
                            if 0 <= p1 < cols and 0 <= p2 < cols and dp[p1][p2] > best:
                                best = dp[p1][p2]
                    if best > NEG:
                        ndp[c1][c2] = (
                            best + grid[r][c1] + (grid[r][c2] if c1 != c2 else 0)
                        )
            dp = ndp
        return max(max(row) for row in dp)
