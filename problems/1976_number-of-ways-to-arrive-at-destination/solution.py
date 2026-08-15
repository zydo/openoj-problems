from typing import List, Optional
import heapq


class Solution:
    def countPaths(self, n: int, roads: List[List[int]]) -> int:
        MOD = 10**9 + 7
        adj = [[] for _ in range(n)]
        for u, v, t in roads:
            adj[u].append((v, t))
            adj[v].append((u, t))
        dist = [float("inf")] * n
        ways = [0] * n
        dist[0] = 0
        ways[0] = 1
        heap = [(0, 0)]
        while heap:
            d, u = heapq.heappop(heap)
            if d > dist[u]:
                continue
            for v, t in adj[u]:
                nd = d + t
                if nd < dist[v]:
                    dist[v] = nd
                    ways[v] = ways[u]
                    heapq.heappush(heap, (nd, v))
                elif nd == dist[v]:
                    ways[v] = (ways[v] + ways[u]) % MOD
        return ways[n - 1] % MOD
