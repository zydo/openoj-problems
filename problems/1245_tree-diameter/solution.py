from typing import List, Optional
from collections import deque


class Solution:
    def treeDiameter(self, edges: List[List[int]]) -> int:
        if not edges:
            return 0
        n = len(edges) + 1
        adj = [[] for _ in range(n)]
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)

        def bfs(src):
            dist = [-1] * n
            dist[src] = 0
            queue = deque([src])
            far = src
            while queue:
                u = queue.popleft()
                for v in adj[u]:
                    if dist[v] < 0:
                        dist[v] = dist[u] + 1
                        queue.append(v)
                        if dist[v] > dist[far]:
                            far = v
            return far, dist[far]

        far, _ = bfs(0)
        _, diameter = bfs(far)
        return diameter
