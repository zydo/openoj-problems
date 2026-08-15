import heapq
from typing import List, Optional


class Solution:
    def maxPoints(self, grid: List[List[int]], queries: List[int]) -> List[int]:
        m, n = len(grid), len(grid[0])
        order = sorted(range(len(queries)), key=lambda i: queries[i])
        answer = [0] * len(queries)
        visited = [[False] * n for _ in range(m)]
        visited[0][0] = True
        heap = [(grid[0][0], 0, 0)]
        count = 0
        for idx in order:
            q = queries[idx]
            while heap and heap[0][0] < q:
                _, r, c = heapq.heappop(heap)
                count += 1
                for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < m and 0 <= nc < n and not visited[nr][nc]:
                        visited[nr][nc] = True
                        heapq.heappush(heap, (grid[nr][nc], nr, nc))
            answer[idx] = count
        return answer
