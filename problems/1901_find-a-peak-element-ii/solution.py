from typing import List, Optional


class Solution:
    def findPeakGrid(self, mat: List[List[int]]) -> List[int]:
        m, n = len(mat), len(mat[0])
        lo, hi = 0, m - 1
        while lo <= hi:
            mid = (lo + hi) // 2
            row = mat[mid]
            j = 0
            for c in range(1, n):
                if row[c] > row[j]:
                    j = c
            up = mat[mid - 1][j] if mid > 0 else -1
            down = mat[mid + 1][j] if mid < m - 1 else -1
            if row[j] > up and row[j] > down:
                return [mid, j]
            if up > row[j]:
                hi = mid - 1
            else:
                lo = mid + 1
        return []
