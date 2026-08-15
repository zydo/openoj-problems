from typing import List, Optional
import heapq


class Solution:
    def reachableNodes(self, edges: List[List[int]], maxMoves: int, n: int) -> int:
        adj = [[] for _ in range(n)]
        for u, v, cnt in edges:
            adj[u].append((v, cnt + 1))
            adj[v].append((u, cnt + 1))
        INF = float("inf")
        dist = [INF] * n
        dist[0] = 0
        pq = [(0, 0)]
        while pq:
            d, u = heapq.heappop(pq)
            if d != dist[u]:
                continue
            for v, w in adj[u]:
                nd = d + w
                if nd < dist[v]:
                    dist[v] = nd
                    heapq.heappush(pq, (nd, v))
        result = 0
        for d in dist:
            if d <= maxMoves:
                result += 1
        for u, v, cnt in edges:
            a = max(0, maxMoves - dist[u])
            b = max(0, maxMoves - dist[v])
            result += min(cnt, a + b)
        return result
