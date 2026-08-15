from typing import List, Optional
import heapq


class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        n = len(grid)
        INF = float("inf")
        dist = [[INF] * n for _ in range(n)]
        dist[0][0] = grid[0][0]
        heap = [(grid[0][0], 0, 0)]
        while heap:
            t, r, c = heapq.heappop(heap)
            if r == n - 1 and c == n - 1:
                return t
            if t > dist[r][c]:
                continue
            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nr, nc = r + dr, c + dc
                if 0 <= nr < n and 0 <= nc < n:
                    nt = max(t, grid[nr][nc])
                    if nt < dist[nr][nc]:
                        dist[nr][nc] = nt
                        heapq.heappush(heap, (nt, nr, nc))
        return dist[n - 1][n - 1]
