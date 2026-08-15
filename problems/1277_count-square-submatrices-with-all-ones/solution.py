from typing import List, Optional


class Solution:
    def countSquares(self, matrix: List[List[int]]) -> int:
        m = len(matrix)
        n = len(matrix[0])
        total = 0
        prev = [0] * n
        for i in range(m):
            cur = [0] * n
            for j in range(n):
                if not matrix[i][j]:
                    continue
                if i == 0 or j == 0:
                    cur[j] = 1
                else:
                    cur[j] = min(prev[j], cur[j - 1], prev[j - 1]) + 1
                total += cur[j]
            prev = cur
        return total
