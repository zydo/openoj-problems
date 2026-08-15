from typing import List, Optional


class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        m = len(matrix)
        n = len(matrix[0])
        best = 0
        prev = [0] * (n + 1)
        for i in range(m):
            curr = [0] * (n + 1)
            for j in range(n):
                if matrix[i][j] == "1":
                    curr[j + 1] = min(prev[j], prev[j + 1], curr[j]) + 1
                    best = max(best, curr[j + 1])
            prev = curr
        return best * best
