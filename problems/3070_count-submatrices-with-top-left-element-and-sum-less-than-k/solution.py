from typing import List, Optional


class Solution:
    def countSubmatrices(self, grid: List[List[int]], k: int) -> int:
        rows, cols = len(grid), len(grid[0])
        col_sums = [0] * cols
        count = 0
        for i in range(rows):
            prefix = 0
            for j in range(cols):
                col_sums[j] += grid[i][j]
                prefix += col_sums[j]
                if prefix > k:
                    break
                count += 1
        return count
