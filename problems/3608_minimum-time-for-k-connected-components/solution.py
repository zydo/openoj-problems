from typing import List, Optional


class Solution:
    def minTime(self, n: int, edges: List[List[int]], k: int) -> int:
        parent = list(range(n))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(a, b):
            ra, rb = find(a), find(b)
            if ra == rb:
                return False
            parent[ra] = rb
            return True

        ordered = sorted(edges, key=lambda e: -e[2])
        components = n
        answer = 0
        i = 0
        m = len(ordered)
        while i < m:
            t = ordered[i][2]
            if components >= k:
                answer = t
            while i < m and ordered[i][2] == t:
                u, v, _ = ordered[i]
                if union(u, v):
                    components -= 1
                i += 1
        if components >= k:
            answer = 0
        return answer
