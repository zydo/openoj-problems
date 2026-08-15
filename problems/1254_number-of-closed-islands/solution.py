from typing import List, Optional


class Solution:
    def closedIsland(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        dirs = ((1, 0), (-1, 0), (0, 1), (0, -1))

        def flood(r, c):
            grid[r][c] = 1
            stack = [(r, c)]
            closed = True
            while stack:
                x, y = stack.pop()
                for dx, dy in dirs:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < rows and 0 <= ny < cols:
                        if grid[nx][ny] == 0:
                            grid[nx][ny] = 1
                            stack.append((nx, ny))
                    else:
                        closed = False
            return closed

        count = 0
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 0:
                    if flood(r, c):
                        count += 1
        return count
