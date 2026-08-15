from typing import List, Optional


class Solution:
    def countPairs(self, n: int, edges: List[List[int]]) -> int:
        parent = list(range(n))
        size = [1] * n

        def find(x):
            root = x
            while parent[root] != root:
                root = parent[root]
            while parent[x] != root:
                parent[x], x = root, parent[x]
            return root

        for a, b in edges:
            ra, rb = find(a), find(b)
            if ra != rb:
                if size[ra] < size[rb]:
                    ra, rb = rb, ra
                parent[rb] = ra
                size[ra] += size[rb]

        total_pairs = n * (n - 1) // 2
        reachable = 0
        for v in range(n):
            if find(v) == v:
                reachable += size[v] * (size[v] - 1) // 2
        return total_pairs - reachable
