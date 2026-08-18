import heapq
from typing import List


class Solution:
    def pooledOnGrid(self, heights: List[List[int]]) -> int:
        m, n = len(heights), len(heights[0])
        visited = [[False] * n for _ in range(m)]
        heap: list[tuple[int, int, int]] = []
        # Water spills off the map at the border, so the frontier starts as
        # the whole border ring.
        for i in range(m):
            for j in range(n):
                if i == 0 or i == m - 1 or j == 0 or j == n - 1:
                    heapq.heappush(heap, (heights[i][j], i, j))
                    visited[i][j] = True
        water = 0
        while heap:
            # h is the frontier minimum: no undiscovered cell can hold water
            # above h, since any escape path crosses the frontier at >= h.
            h, i, j = heapq.heappop(heap)
            for ni, nj in ((i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)):
                if 0 <= ni < m and 0 <= nj < n and not visited[ni][nj]:
                    visited[ni][nj] = True
                    nh = heights[ni][nj]
                    if nh < h:
                        # Lower neighbor settles now, filled up to level h.
                        water += h - nh
                    # Push max(h, nh): entries carry the effective
                    # water-plus-terrain level, the running spill level.
                    heapq.heappush(heap, (max(h, nh), ni, nj))
        return water
