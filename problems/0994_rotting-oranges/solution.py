from typing import List, Optional
from collections import deque


class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        grid = [row[:] for row in grid]
        rows, cols = len(grid), len(grid[0])
        queue = deque()
        fresh = 0
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 2:
                    queue.append((r, c, 0))
                elif grid[r][c] == 1:
                    fresh += 1
        minutes = 0
        while queue:
            r, c, t = queue.popleft()
            minutes = max(minutes, t)
            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh -= 1
                    queue.append((nr, nc, t + 1))
        return minutes if fresh == 0 else -1
