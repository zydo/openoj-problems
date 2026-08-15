from typing import List, Optional
from collections import defaultdict, deque


class Solution:
    def calcEquation(
        self, equations: List[List[str]], values: List[float], queries: List[List[str]]
    ) -> List[float]:
        graph = defaultdict(dict)
        for (a, b), value in zip(equations, values):
            graph[a][b] = value
            graph[b][a] = 1.0 / value

        def query(start, end):
            if start not in graph or end not in graph:
                return -1.0
            if start == end:
                return 1.0
            seen = {start}
            queue = deque([(start, 1.0)])
            while queue:
                node, product = queue.popleft()
                for neighbor, weight in graph[node].items():
                    if neighbor == end:
                        return product * weight
                    if neighbor not in seen:
                        seen.add(neighbor)
                        queue.append((neighbor, product * weight))
            return -1.0

        return [query(c, d) for c, d in queries]
