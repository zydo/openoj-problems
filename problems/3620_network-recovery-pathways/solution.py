from typing import List, Optional

from collections import deque


class Solution:
    def findMaxPathScore(
        self, edges: List[List[int]], online: List[bool], k: int
    ) -> int:
        n = len(online)
        adj = [[] for _ in range(n)]
        indeg = [0] * n
        for u, v, c in edges:
            adj[u].append((v, c))
            indeg[v] += 1

        queue = deque(i for i in range(n) if indeg[i] == 0)
        topo = []
        while queue:
            u = queue.popleft()
            topo.append(u)
            for v, _ in adj[u]:
                indeg[v] -= 1
                if indeg[v] == 0:
                    queue.append(v)

        costs = sorted({c for _, _, c in edges})

        def feasible(s):
            INF = float("inf")
            dist = [INF] * n
            dist[0] = 0
            for u in topo:
                if dist[u] == INF or not online[u]:
                    continue
                for v, c in adj[u]:
                    if c >= s and online[v]:
                        nd = dist[u] + c
                        if nd < dist[v]:
                            dist[v] = nd
            return dist[n - 1] <= k

        if not feasible(0):
            return -1
        if not costs:
            return 0
        lo, hi = 0, len(costs) - 1
        ans = costs[0]
        while lo <= hi:
            mid = (lo + hi) // 2
            if feasible(costs[mid]):
                ans = costs[mid]
                lo = mid + 1
            else:
                hi = mid - 1
        return ans
