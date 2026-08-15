from typing import List, Optional
from collections import deque


class Solution:
    def shortestPathLength(self, graph: List[List[int]]) -> int:
        n = len(graph)
        full = (1 << n) - 1
        dist = [[-1] * (1 << n) for _ in range(n)]
        queue = deque()
        for i in range(n):
            dist[i][1 << i] = 0
            queue.append((i, 1 << i))
        while queue:
            node, mask = queue.popleft()
            if mask == full:
                return dist[node][mask]
            for nxt in graph[node]:
                nmask = mask | (1 << nxt)
                if dist[nxt][nmask] == -1:
                    dist[nxt][nmask] = dist[node][mask] + 1
                    queue.append((nxt, nmask))
        return 0
