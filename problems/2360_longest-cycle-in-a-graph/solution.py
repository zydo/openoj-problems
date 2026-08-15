from typing import List, Optional


class Solution:
    def longestCycle(self, edges: List[int]) -> int:
        n = len(edges)
        color = [0] * n
        step = [0] * n
        timer = 1
        best = -1
        for start in range(n):
            if color[start]:
                continue
            node = start
            path = []
            while node != -1 and color[node] == 0:
                color[node] = 1
                step[node] = timer
                timer += 1
                path.append(node)
                node = edges[node]
            if node != -1 and color[node] == 1:
                best = max(best, timer - step[node])
            for v in path:
                color[v] = 2
        return best
