from typing import List, Optional


class Solution:
    def criticalConnections(
        self, n: int, connections: List[List[int]]
    ) -> List[List[int]]:
        graph = [[] for _ in range(n)]
        for a, b in connections:
            graph[a].append(b)
            graph[b].append(a)

        disc = [-1] * n
        low = [0] * n
        timer = 0
        bridges = []

        def dfs(u, parent):
            nonlocal timer
            disc[u] = low[u] = timer
            timer += 1
            for v in graph[u]:
                if disc[v] == -1:
                    dfs(v, u)
                    low[u] = min(low[u], low[v])
                    if low[v] > disc[u]:
                        bridges.append([min(u, v), max(u, v)])
                elif v != parent:
                    low[u] = min(low[u], disc[v])

        dfs(0, -1)
        bridges.sort()
        return bridges
