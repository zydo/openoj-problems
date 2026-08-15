from typing import List, Optional

import heapq


class Solution:
    def shortestDistance(
        self, maze: List[List[int]], start: List[int], destination: List[int]
    ) -> int:
        m, n = len(maze), len(maze[0])
        start = (start[0], start[1])
        destination = (destination[0], destination[1])
        dist = {start: 0}
        heap = [(0, start)]
        while heap:
            d, (r, c) = heapq.heappop(heap)
            if (r, c) == destination:
                return d
            if d > dist.get((r, c), d):
                continue
            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nr, nc = r, c
                steps = 0
                while (
                    0 <= nr + dr < m
                    and 0 <= nc + dc < n
                    and maze[nr + dr][nc + dc] == 0
                ):
                    nr += dr
                    nc += dc
                    steps += 1
                if steps:
                    nd = d + steps
                    if nd < dist.get((nr, nc), float("inf")):
                        dist[(nr, nc)] = nd
                        heapq.heappush(heap, (nd, (nr, nc)))
        return -1
