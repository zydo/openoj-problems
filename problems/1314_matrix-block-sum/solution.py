from typing import List, Optional


class Solution:
    def matrixBlockSum(self, mat: List[List[int]], k: int) -> List[List[int]]:
        m, n = len(mat), len(mat[0])
        prefix = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(m):
            for j in range(n):
                prefix[i + 1][j + 1] = (
                    prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j] + mat[i][j]
                )
        answer = []
        for i in range(m):
            row = []
            for j in range(n):
                r1, r2 = max(0, i - k), min(m, i + k + 1)
                c1, c2 = max(0, j - k), min(n, j + k + 1)
                row.append(
                    prefix[r2][c2] - prefix[r1][c2] - prefix[r2][c1] + prefix[r1][c1]
                )
            answer.append(row)
        return answer
