from typing import List, Optional


class Solution:
    def minimumTotalPrice(
        self, n: int, edges: List[List[int]], price: List[int], trips: List[List[int]]
    ) -> int:
        adj = [[] for _ in range(n)]
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)

        freq = [0] * n
        for trip in trips:
            start, end = trip[0], trip[1]
            parent = [-1] * n
            visited = [False] * n
            stack = [start]
            visited[start] = True
            while stack:
                v = stack.pop()
                if v == end:
                    break
                for u in adj[v]:
                    if not visited[u]:
                        visited[u] = True
                        parent[u] = v
                        stack.append(u)
            cur = end
            while cur != -1:
                freq[cur] += 1
                if cur == start:
                    break
                cur = parent[cur]

        def dfs(v, p):
            dp0 = price[v] * freq[v]
            dp1 = (price[v] // 2) * freq[v]
            for u in adj[v]:
                if u == p:
                    continue
                c0, c1 = dfs(u, v)
                dp0 += min(c0, c1)
                dp1 += c0
            return dp0, dp1

        return min(dfs(0, -1))
