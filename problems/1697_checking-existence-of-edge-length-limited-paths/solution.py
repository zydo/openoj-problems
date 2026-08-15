from typing import List, Optional


class Solution:
    def distanceLimitedPathsExist(
        self, n: int, edgeList: List[List[int]], queries: List[List[int]]
    ) -> List[bool]:
        parent = list(range(n))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        edges = sorted(edgeList, key=lambda e: e[2])
        order = sorted(range(len(queries)), key=lambda i: queries[i][2])
        answer = [False] * len(queries)
        ei = 0
        for qi in order:
            p, q, limit = queries[qi]
            while ei < len(edges) and edges[ei][2] < limit:
                ra, rb = find(edges[ei][0]), find(edges[ei][1])
                if ra != rb:
                    parent[ra] = rb
                ei += 1
            answer[qi] = find(p) == find(q)
        return answer
