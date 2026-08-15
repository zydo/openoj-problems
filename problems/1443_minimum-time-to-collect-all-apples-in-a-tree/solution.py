from typing import List, Optional


class Solution:
    def minTime(self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:
        adjacency = [[] for _ in range(n)]
        for a, b in edges:
            adjacency[a].append(b)
            adjacency[b].append(a)

        parent = [-1] * n
        order = []
        seen = [False] * n
        seen[0] = True
        stack = [0]
        while stack:
            u = stack.pop()
            order.append(u)
            for v in adjacency[u]:
                if not seen[v]:
                    seen[v] = True
                    parent[v] = u
                    stack.append(v)

        has = [bool(x) for x in hasApple]
        time = 0
        for u in reversed(order):
            if u == 0:
                continue
            if has[u]:
                time += 2
                has[parent[u]] = True
        return time
