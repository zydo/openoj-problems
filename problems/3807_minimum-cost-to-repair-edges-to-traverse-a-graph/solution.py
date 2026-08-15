from typing import List, Optional


class Solution:
    def minCost(self, n: int, edges: List[List[int]], k: int) -> int:
        from collections import deque

        adj = [[] for _ in range(n)]
        max_w = 0
        for u, v, w in edges:
            adj[u].append((v, w))
            adj[v].append((u, w))
            if w > max_w:
                max_w = w

        def can(money):
            dist = [-1] * n
            dist[0] = 0
            queue = deque([0])
            while queue:
                u = queue.popleft()
                if dist[u] >= k:
                    continue
                for v, w in adj[u]:
                    if w <= money and dist[v] == -1:
                        dist[v] = dist[u] + 1
                        queue.append(v)
            return dist[n - 1] != -1 and dist[n - 1] <= k

        if not can(max_w):
            return -1
        lo, hi = 0, max_w
        while lo < hi:
            mid = (lo + hi) // 2
            if can(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
