from typing import List, Optional


class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        m = len(points)
        n = len(points[0])
        prev = [points[0][c] for c in range(n)]
        for r in range(1, m):
            left = [0] * n
            best = prev[0] + 0
            for c in range(n):
                if prev[c] + c > best:
                    best = prev[c] + c
                left[c] = best
            right = [0] * n
            best = prev[n - 1] - (n - 1)
            for c in range(n - 1, -1, -1):
                if prev[c] - c > best:
                    best = prev[c] - c
                right[c] = best
            prev = [points[r][c] + max(left[c] - c, right[c] + c) for c in range(n)]
        return max(prev)
