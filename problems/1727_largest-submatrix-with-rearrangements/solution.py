from typing import List, Optional


class Solution:
    def largestSubmatrix(self, matrix: List[List[int]]) -> int:
        m = len(matrix)
        if m == 0:
            return 0
        n = len(matrix[0])
        heights = [0] * n
        best = 0
        for row in matrix:
            for j in range(n):
                heights[j] = heights[j] + 1 if row[j] == 1 else 0
            ordered = sorted(heights, reverse=True)
            for i, h in enumerate(ordered):
                if h == 0:
                    break
                area = h * (i + 1)
                if area > best:
                    best = area
        return best
