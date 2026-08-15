from typing import List, Optional

from collections import deque


class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        n = len(grid)
        if grid[0][0] != 0 or grid[n - 1][n - 1] != 0:
            return -1
        if n == 1:
            return 1
        dist = [[0] * n for _ in range(n)]
        queue = deque([(0, 0)])
        dist[0][0] = 1
        while queue:
            x, y = queue.popleft()
            for dx in (-1, 0, 1):
                for dy in (-1, 0, 1):
                    if dx == 0 and dy == 0:
                        continue
                    nx, ny = x + dx, y + dy
                    if (
                        0 <= nx < n
                        and 0 <= ny < n
                        and grid[nx][ny] == 0
                        and dist[nx][ny] == 0
                    ):
                        if nx == n - 1 and ny == n - 1:
                            return dist[x][y] + 1
                        dist[nx][ny] = dist[x][y] + 1
                        queue.append((nx, ny))
        return -1
