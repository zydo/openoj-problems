from typing import List, Optional

from collections import deque


class Solution:
    def buildMatrix(
        self,
        k: int,
        rowConditions: List[List[int]],
        colConditions: List[List[int]],
    ) -> List[List[int]]:
        def topo(conditions):
            adj = [[] for _ in range(k + 1)]
            indeg = [0] * (k + 1)
            for a, b in conditions:
                adj[a].append(b)
                indeg[b] += 1
            queue = deque(v for v in range(1, k + 1) if indeg[v] == 0)
            order = []
            while queue:
                u = queue.popleft()
                order.append(u)
                for w in adj[u]:
                    indeg[w] -= 1
                    if indeg[w] == 0:
                        queue.append(w)
            if len(order) != k:
                return None
            return order

        row_order = topo(rowConditions)
        if row_order is None:
            return []
        col_order = topo(colConditions)
        if col_order is None:
            return []
        row_pos = {v: i for i, v in enumerate(row_order)}
        col_pos = {v: i for i, v in enumerate(col_order)}
        matrix = [[0] * k for _ in range(k)]
        for v in range(1, k + 1):
            matrix[row_pos[v]][col_pos[v]] = v
        return matrix
