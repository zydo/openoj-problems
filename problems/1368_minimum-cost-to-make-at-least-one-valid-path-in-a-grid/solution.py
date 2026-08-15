from typing import List, Optional

from collections import deque


class Solution:
    def minCost(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        dirs = {1: (0, 1), 2: (0, -1), 3: (1, 0), 4: (-1, 0)}
        dist = [[float("inf")] * n for _ in range(m)]
        dist[0][0] = 0
        dq = deque([(0, 0)])
        while dq:
            i, j = dq.popleft()
            d = dist[i][j]
            for sign, (di, dj) in dirs.items():
                ni, nj = i + di, j + dj
                if 0 <= ni < m and 0 <= nj < n:
                    cost = 0 if grid[i][j] == sign else 1
                    if d + cost < dist[ni][nj]:
                        dist[ni][nj] = d + cost
                        if cost == 0:
                            dq.appendleft((ni, nj))
                        else:
                            dq.append((ni, nj))
        return dist[m - 1][n - 1]
