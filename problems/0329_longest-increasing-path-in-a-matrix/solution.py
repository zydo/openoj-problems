from typing import List, Optional


class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        if not matrix or not matrix[0]:
            return 0
        m = len(matrix)
        n = len(matrix[0])
        cells = sorted((matrix[i][j], i, j) for i in range(m) for j in range(n))
        dp = [[1] * n for _ in range(m)]
        best = 1
        for _, i, j in cells:
            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                ni, nj = i + di, j + dj
                if 0 <= ni < m and 0 <= nj < n and matrix[ni][nj] < matrix[i][j]:
                    if dp[ni][nj] + 1 > dp[i][j]:
                        dp[i][j] = dp[ni][nj] + 1
            if dp[i][j] > best:
                best = dp[i][j]
        return best
