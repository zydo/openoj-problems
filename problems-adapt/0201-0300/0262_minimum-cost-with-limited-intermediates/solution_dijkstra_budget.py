import heapq


class Solution:
    def minimumLimitedRouteCost(self, nodeCount: int, links: list[list[int]], source: int, target: int, maxIntermediates: int) -> int:
        graph = [[] for _ in range(nodeCount)]
        for f, t, weight in links:
            graph[f].append((t, weight))
        # State = (cost, node, links taken). Carrying the count in the
        # state is what enforces the limit: a state that already used its
        # maxIntermediates+1 links is never allowed to board another.
        heap = [(0, source, 0)]
        best = [float("inf")] * nodeCount
        while heap:
            cost, node, edges = heapq.heappop(heap)
            # The heap pops in cost order, so the first target pop is final.
            if node == target:
                return cost
            # Dominance prune: a cheaper state that used no more links was
            # already expanded here, so this one cannot lead anywhere new.
            if edges > best[node]:
                continue
            best[node] = edges
            if edges < maxIntermediates + 1:
                for nxt, weight in graph[node]:
                    heapq.heappush(heap, (cost + weight, nxt, edges + 1))
        return -1
