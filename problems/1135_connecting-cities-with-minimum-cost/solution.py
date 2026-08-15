from typing import List, Optional


class Solution:
    def minimumCost(self, n: int, connections: List[List[int]]) -> int:
        parent = list(range(n + 1))

        def find(x: int) -> int:
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        total = 0
        components = n
        for x, y, cost in sorted(connections, key=lambda c: c[2]):
            rx, ry = find(x), find(y)
            if rx != ry:
                parent[rx] = ry
                total += cost
                components -= 1
                if components == 1:
                    return total
        return -1
