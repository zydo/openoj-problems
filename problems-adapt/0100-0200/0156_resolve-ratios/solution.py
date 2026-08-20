from collections import defaultdict, deque


class Solution:
    def resolveRatios(self, pairs: list[list[str]], ratios: list[float], queries: list[list[str]]) -> list[float]:
        graph = defaultdict(dict)
        # Each ratio a/b = v becomes a directed edge a -> b of weight v
        # plus the reverse edge of weight 1/v (division inverts with direction).
        for (a, b), value in zip(pairs, ratios):
            graph[a][b] = value
            graph[b][a] = 1.0 / value

        def query(start, end):
            # An unknown variable is unanswerable (this also covers x / x for
            # an undefined x); a known variable over itself is 1.0.
            if start not in graph or end not in graph:
                return -1.0
            if start == end:
                return 1.0
            # BFS carrying the running product: weights along the path
            # telescope to start / end because intermediate variables cancel.
            seen = {start}
            queue = deque([(start, 1.0)])
            while queue:
                node, product = queue.popleft()
                for neighbor, weight in graph[node].items():
                    if neighbor == end:
                        # The ratios are consistent, so the first path found
                        # already yields the correct quotient.
                        return product * weight
                    if neighbor not in seen:
                        seen.add(neighbor)
                        queue.append((neighbor, product * weight))
            return -1.0

        return [query(c, d) for c, d in queries]
