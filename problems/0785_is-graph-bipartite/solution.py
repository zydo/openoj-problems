from typing import List, Optional


class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        n = len(graph)
        # 0 = uncolored, else +1/-1: bipartite iff a proper 2-coloring
        # exists, with each node's color forced by its distance parity
        # from the component root.
        color = [0] * n
        # The graph may be disconnected: start a fresh BFS from every
        # still-uncolored node.
        for start in range(n):
            if color[start] != 0:
                continue
            color[start] = 1
            queue = [start]
            while queue:
                next_queue = []
                for u in queue:
                    for v in graph[u]:
                        # Uncolored neighbor: take the opposite color.
                        if color[v] == 0:
                            color[v] = -color[u]
                            next_queue.append(v)
                        # Same-color edge = odd cycle, the sole
                        # obstruction to bipartiteness.
                        elif color[v] == color[u]:
                            return False
                queue = next_queue
        # Every component colored cleanly: the two color classes are
        # the required partition.
        return True
