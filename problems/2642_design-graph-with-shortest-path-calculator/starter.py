from typing import List, Optional


class Graph:
    def __init__(self, n: int, edges: List[List[int]]) -> None:
        raise NotImplementedError("TODO")

    def addEdge(self, edge: List[int]) -> None:
        raise NotImplementedError("TODO")

    def shortestPath(self, node1: int, node2: int) -> int:
        raise NotImplementedError("TODO")
