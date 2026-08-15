from typing import List, Optional


class Solution:
    def makeConnected(self, n: int, connections: List[List[int]]) -> int:
        if len(connections) < n - 1:
            return -1
        parent = list(range(n))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        components = n
        for a, b in connections:
            ra, rb = find(a), find(b)
            if ra != rb:
                parent[ra] = rb
                components -= 1
        return components - 1
