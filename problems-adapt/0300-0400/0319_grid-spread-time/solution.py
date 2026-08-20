from typing import List, Optional
from collections import deque


class Solution:
    def gridSpreadTime(self, grid: List[List[int]]) -> int:
        grid = [row[:] for row in grid]
        rows, cols = len(grid), len(grid[0])
        queue = deque()
        pending = 0
        # Multi-source BFS: every active cell starts at t = 0; the answer
        # is the time the last pending cell activates. Count pending cells so
        # walled-off stragglers can be detected at the end.
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 2:
                    queue.append((r, c, 0))
                elif grid[r][c] == 1:
                    pending += 1
        rounds = 0
        while queue:
            r, c, t = queue.popleft()
            # Tracking the max activation time spares per-round batching.
            rounds = max(rounds, t)
            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                    # Flip to active on enqueue: each cell queues at most
                    # once and `pending` stays in sync with the grid.
                    grid[nr][nc] = 2
                    pending -= 1
                    queue.append((nr, nc, t + 1))
        return rounds if pending == 0 else -1
