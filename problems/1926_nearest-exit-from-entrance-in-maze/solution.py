from typing import List, Optional
from collections import deque


class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        m, n = len(maze), len(maze[0])
        er, ec = entrance[0], entrance[1]
        dist = [[-1] * n for _ in range(m)]
        dist[er][ec] = 0
        q = deque([(er, ec)])
        while q:
            i, j = q.popleft()
            if (i == 0 or i == m - 1 or j == 0 or j == n - 1) and (i, j) != (er, ec):
                return dist[i][j]
            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                ni, nj = i + di, j + dj
                if (
                    0 <= ni < m
                    and 0 <= nj < n
                    and maze[ni][nj] == "."
                    and dist[ni][nj] == -1
                ):
                    dist[ni][nj] = dist[i][j] + 1
                    q.append((ni, nj))
        return -1
