from typing import List, Optional
from collections import deque


class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
        n = len(grid)
        g = [row[:] for row in grid]
        queue = deque()
        for i in range(n):
            for j in range(n):
                if g[i][j] == 1:
                    queue.append((i, j))
        if not queue or len(queue) == n * n:
            return -1
        dist = 0
        while queue:
            dist += 1
            for _ in range(len(queue)):
                i, j = queue.popleft()
                for ni, nj in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                    if 0 <= ni < n and 0 <= nj < n and g[ni][nj] == 0:
                        g[ni][nj] = 1
                        queue.append((ni, nj))
        return dist - 1
