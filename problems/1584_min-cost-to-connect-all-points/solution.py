from typing import List, Optional


class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        if n <= 1:
            return 0
        inf = float("inf")
        best = [inf] * n
        best[0] = 0
        used = [False] * n
        total = 0
        for _ in range(n):
            u = -1
            for v in range(n):
                if not used[v] and (u == -1 or best[v] < best[u]):
                    u = v
            total += best[u]
            used[u] = True
            for v in range(n):
                if not used[v]:
                    d = abs(points[u][0] - points[v][0]) + abs(
                        points[u][1] - points[v][1]
                    )
                    if d < best[v]:
                        best[v] = d
        return total
