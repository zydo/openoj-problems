from typing import List, Optional


class Solution:
    def minScore(self, grid: List[List[int]]) -> List[List[int]]:
        m, n = len(grid), len(grid[0])
        cells = sorted((grid[r][c], r, c) for r in range(m) for c in range(n))
        row_max = [0] * m
        col_max = [0] * n
        res = [[0] * n for _ in range(m)]
        for _, r, c in cells:
            v = 1 + max(row_max[r], col_max[c])
            res[r][c] = v
            row_max[r] = v
            col_max[c] = v
        return res
