from typing import List, Optional


class Solution:
    def selectKthSmallest(self, grid: List[List[int]], k: int) -> int:
        n = len(grid)

        def count_le(x):
            # Staircase walk from bottom-left: elements <= x.
            count = 0
            row, col = n - 1, 0
            while row >= 0 and col < n:
                if grid[row][col] <= x:
                    count += row + 1
                    col += 1
                else:
                    row -= 1
            return count

        lo, hi = grid[0][0], grid[-1][-1]
        while lo < hi:
            mid = (lo + hi) // 2
            if count_le(mid) >= k:
                hi = mid
            else:
                lo = mid + 1
        return lo
