from typing import List, Optional
from bisect import bisect_right


class Solution:
    def matrixMedian(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        need = (m * n) // 2 + 1
        lo = min(row[0] for row in grid)
        hi = max(row[-1] for row in grid)

        def count_le(x):
            return sum(bisect_right(row, x) for row in grid)

        while lo < hi:
            mid = (lo + hi) // 2
            if count_le(mid) >= need:
                hi = mid
            else:
                lo = mid + 1
        return lo
