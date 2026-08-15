from typing import List, Optional


class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        n = len(graph)
        outdeg = [len(adj) for adj in graph]
        radj = [[] for _ in range(n)]
        for u, adj in enumerate(graph):
            for v in adj:
                radj[v].append(u)
        queue = [i for i in range(n) if outdeg[i] == 0]
        head = 0
        safe = [False] * n
        while head < len(queue):
            u = queue[head]
            head += 1
            safe[u] = True
            for v in radj[u]:
                outdeg[v] -= 1
                if outdeg[v] == 0:
                    queue.append(v)
        return [i for i in range(n) if safe[i]]
