from typing import List, Optional

NEG = -(10**18)


class Solution:
    def maxSubgraphScore(
        self, n: int, edges: List[List[int]], good: List[int]
    ) -> List[int]:
        adj = [[] for _ in range(n)]
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)

        parent = [-1] * n
        children = [[] for _ in range(n)]
        order = []
        stack = [0]
        parent[0] = -2
        while stack:
            u = stack.pop()
            order.append(u)
            for v in adj[u]:
                if v == parent[u]:
                    continue
                parent[v] = u
                children[u].append(v)
                stack.append(v)

        weight = [1 if g else -1 for g in good]

        down = [0] * n
        for u in reversed(order):
            s = weight[u]
            for c in children[u]:
                if down[c] > 0:
                    s += down[c]
            down[u] = s

        up = [0] * n
        up[0] = NEG
        result = [0] * n
        for u in order:
            total_pos = sum(max(0, down[c]) for c in children[u])
            for c in children[u]:
                up[c] = weight[u] + (total_pos - max(0, down[c])) + max(0, up[u])
            result[u] = weight[u] + total_pos + max(0, up[u])
        return result
