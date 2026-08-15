from typing import List, Optional

import heapq


class Solution:
    def minimumWeight(
        self, n: int, edges: List[List[int]], src1: int, src2: int, dest: int
    ) -> int:
        def dijkstra(adj, src):
            INF = float("inf")
            dist = [INF] * n
            dist[src] = 0
            heap = [(0, src)]
            while heap:
                d, u = heapq.heappop(heap)
                if d > dist[u]:
                    continue
                for v, w in adj[u]:
                    nd = d + w
                    if nd < dist[v]:
                        dist[v] = nd
                        heapq.heappush(heap, (nd, v))
            return dist

        adj = [[] for _ in range(n)]
        radj = [[] for _ in range(n)]
        for u, v, w in edges:
            adj[u].append((v, w))
            radj[v].append((u, w))
        d1 = dijkstra(adj, src1)
        d2 = dijkstra(adj, src2)
        dd = dijkstra(radj, dest)
        best = min(
            (d1[v] + d2[v] + dd[v] for v in range(n) if dd[v] != float("inf")),
            default=-1,
        )
        if best == float("inf"):
            return -1
        return best
