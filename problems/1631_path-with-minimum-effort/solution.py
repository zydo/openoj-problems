from typing import List, Optional
import heapq


class Solution:
    def minimumEffortPath(self, heights: List[List[int]]) -> int:
        rows, cols = len(heights), len(heights[0])
        dist = [[float("inf")] * cols for _ in range(rows)]
        dist[0][0] = 0
        heap = [(0, 0, 0)]
        while heap:
            d, r, c = heapq.heappop(heap)
            if r == rows - 1 and c == cols - 1:
                return d
            if d > dist[r][c]:
                continue
            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols:
                    nd = max(d, abs(heights[nr][nc] - heights[r][c]))
                    if nd < dist[nr][nc]:
                        dist[nr][nc] = nd
                        heapq.heappush(heap, (nd, nr, nc))
        return 0
