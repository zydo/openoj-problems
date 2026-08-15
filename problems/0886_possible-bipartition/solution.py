from collections import deque
from typing import List, Optional


class Solution:
    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:
        adjacency = [[] for _ in range(n + 1)]
        for a, b in dislikes:
            adjacency[a].append(b)
            adjacency[b].append(a)

        color = [0] * (n + 1)  # 0 = uncolored, 1 / -1 = the two groups
        for start in range(1, n + 1):
            if color[start] != 0:
                continue
            color[start] = 1
            queue = deque([start])
            while queue:
                person = queue.popleft()
                for neighbor in adjacency[person]:
                    if color[neighbor] == 0:
                        color[neighbor] = -color[person]
                        queue.append(neighbor)
                    elif color[neighbor] == color[person]:
                        return False
        return True
