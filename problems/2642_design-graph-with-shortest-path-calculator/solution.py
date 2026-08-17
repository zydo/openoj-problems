from heapq import heappop, heappush
from math import inf


class Graph:
    def __init__(self, n: int, edges: list[list[int]]) -> None:
        self.adjacency: list[list[tuple[int, int]]] = [[] for _ in range(n)]
        for source, target, cost in edges:
            self.adjacency[source].append((target, cost))

    def addEdge(self, edge: list[int]) -> None:
        source, target, cost = edge
        self.adjacency[source].append((target, cost))

    def shortestPath(self, node1: int, node2: int) -> int:
        if node1 == node2:
            return 0
        distance = [inf] * len(self.adjacency)
        distance[node1] = 0
        heap: list[tuple[int, int]] = [(0, node1)]
        while heap:
            so_far, node = heappop(heap)
            if so_far > distance[node]:
                continue
            if node == node2:
                return so_far
            for neighbor, cost in self.adjacency[node]:
                candidate = so_far + cost
                if candidate < distance[neighbor]:
                    distance[neighbor] = candidate
                    heappush(heap, (candidate, neighbor))
        return -1
