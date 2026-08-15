from typing import List, Optional
from collections import deque


class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        if n <= 2:
            return list(range(n))
        adjacency = [[] for _ in range(n)]
        degree = [0] * n
        for a, b in edges:
            adjacency[a].append(b)
            adjacency[b].append(a)
            degree[a] += 1
            degree[b] += 1
        leaves = deque(i for i in range(n) if degree[i] == 1)
        remaining = n
        while remaining > 2:
            for _ in range(len(leaves)):
                leaf = leaves.popleft()
                remaining -= 1
                for neighbor in adjacency[leaf]:
                    degree[neighbor] -= 1
                    if degree[neighbor] == 1:
                        leaves.append(neighbor)
        return sorted(leaves)
