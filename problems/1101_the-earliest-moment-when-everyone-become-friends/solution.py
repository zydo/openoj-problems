from typing import List, Optional


class Solution:
    def earliestAcq(self, logs: List[List[int]], n: int) -> int:
        parent = list(range(n))

        def find(a: int) -> int:
            while parent[a] != a:
                parent[a] = parent[parent[a]]
                a = parent[a]
            return a

        components = n
        for timestamp, x, y in sorted(logs):
            rx, ry = find(x), find(y)
            if rx != ry:
                parent[rx] = ry
                components -= 1
                if components == 1:
                    return timestamp
        return -1
