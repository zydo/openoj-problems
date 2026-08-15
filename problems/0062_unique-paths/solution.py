from typing import List, Optional


class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        row = [1] * n
        for _ in range(1, m):
            for j in range(1, n):
                row[j] += row[j - 1]
        return row[-1]
