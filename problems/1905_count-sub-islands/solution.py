from typing import List, Optional


class Solution:
    def countSubIslands(self, grid1: List[List[int]], grid2: List[List[int]]) -> int:
        m, n = len(grid2), len(grid2[0])
        seen = [[False] * n for _ in range(m)]
        count = 0
        for si in range(m):
            for sj in range(n):
                if grid2[si][sj] == 1 and not seen[si][sj]:
                    seen[si][sj] = True
                    stack = [(si, sj)]
                    is_sub = True
                    while stack:
                        x, y = stack.pop()
                        if grid1[x][y] != 1:
                            is_sub = False
                        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                            nx, ny = x + dx, y + dy
                            if (
                                0 <= nx < m
                                and 0 <= ny < n
                                and grid2[nx][ny] == 1
                                and not seen[nx][ny]
                            ):
                                seen[nx][ny] = True
                                stack.append((nx, ny))
                    if is_sub:
                        count += 1
        return count
