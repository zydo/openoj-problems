from typing import List, Optional


class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        n = len(graph)
        color = [0] * n
        for start in range(n):
            if color[start] != 0:
                continue
            color[start] = 1
            queue = [start]
            while queue:
                next_queue = []
                for u in queue:
                    for v in graph[u]:
                        if color[v] == 0:
                            color[v] = -color[u]
                            next_queue.append(v)
                        elif color[v] == color[u]:
                            return False
                queue = next_queue
        return True
