from typing import List, Optional


class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        parent: dict = {}

        def find(node: int) -> int:
            root = node
            while parent[root] != root:
                root = parent[root]
            while parent[node] != root:
                parent[node], node = root, parent[node]
            return root

        def union(a: int, b: int) -> bool:
            if a not in parent:
                parent[a] = a
            if b not in parent:
                parent[b] = b
            ra, rb = find(a), find(b)
            if ra == rb:
                return False
            parent[ra] = rb
            return True

        for a, b in edges:
            if not union(a, b):
                return [a, b]
        return []
