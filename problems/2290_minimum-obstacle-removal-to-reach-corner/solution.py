from typing import List, Optional
from collections import deque


class Solution:
    def minimumObstacles(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])
        INF = float("inf")
        dist = [[INF] * n for _ in range(m)]
        dist[0][0] = 0
        dq = deque([(0, 0)])
        while dq:
            i, j = dq.popleft()
            d = dist[i][j]
            for di, dj in ((0, 1), (0, -1), (1, 0), (-1, 0)):
                ni, nj = i + di, j + dj
                if 0 <= ni < m and 0 <= nj < n:
                    nd = d + grid[ni][nj]
                    if nd < dist[ni][nj]:
                        dist[ni][nj] = nd
                        if grid[ni][nj] == 0:
                            dq.appendleft((ni, nj))
                        else:
                            dq.append((ni, nj))
        return dist[m - 1][n - 1]
