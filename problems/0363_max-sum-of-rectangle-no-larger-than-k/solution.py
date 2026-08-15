from typing import List, Optional


class Solution:
    def maxSumSubmatrix(self, matrix: List[List[int]], k: int) -> int:
        import bisect

        m = len(matrix)
        n = len(matrix[0])
        best = None
        for top in range(m):
            col_sum = [0] * n
            for bottom in range(top, m):
                for c in range(n):
                    col_sum[c] += matrix[bottom][c]
                prefix = 0
                prefixes = [0]
                for value in col_sum:
                    prefix += value
                    position = bisect.bisect_left(prefixes, prefix - k)
                    if position < len(prefixes):
                        candidate = prefix - prefixes[position]
                        if best is None or candidate > best:
                            best = candidate
                    bisect.insort(prefixes, prefix)
        return best
