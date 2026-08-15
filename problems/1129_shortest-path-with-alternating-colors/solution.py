from typing import List, Optional

from collections import deque


class Solution:
    def shortestAlternatingPaths(
        self, n: int, redEdges: List[List[int]], blueEdges: List[List[int]]
    ) -> List[int]:
        adjacency = ([[] for _ in range(n)], [[] for _ in range(n)])
        for u, v in redEdges:
            adjacency[0][u].append(v)
        for u, v in blueEdges:
            adjacency[1][u].append(v)

        INF = float("inf")
        dist = [[INF, INF] for _ in range(n)]
        dist[0][0] = 0  # arrived at 0 via a red edge (virtual start)
        dist[0][1] = 0
        answer = [-1] * n
        answer[0] = 0
        queue = deque([(0, 0), (0, 1)])
        while queue:
            node, color = queue.popleft()
            for nxt in adjacency[1 - color][node]:
                if dist[nxt][1 - color] == INF:
                    dist[nxt][1 - color] = dist[node][color] + 1
                    value = dist[nxt][1 - color]
                    answer[nxt] = (
                        value if answer[nxt] == -1 else min(answer[nxt], value)
                    )
                    queue.append((nxt, 1 - color))
        return answer
