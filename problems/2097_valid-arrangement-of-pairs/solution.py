from typing import List, Optional
from collections import defaultdict


class Solution:
    def validArrangement(self, pairs: List[List[int]]) -> List[List[int]]:
        adj = defaultdict(list)
        indeg = defaultdict(int)
        outdeg = defaultdict(int)
        for u, v in pairs:
            adj[u].append(v)
            outdeg[u] += 1
            indeg[v] += 1

        start = pairs[0][0]
        for u in outdeg:
            if outdeg[u] - indeg[u] == 1:
                start = u
                break

        stack = [start]
        path = []
        while stack:
            u = stack[-1]
            if adj[u]:
                stack.append(adj[u].pop())
            else:
                path.append(u)
                stack.pop()

        path.reverse()
        return [[path[i], path[i + 1]] for i in range(len(path) - 1)]
