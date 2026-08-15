from typing import List, Optional


class Solution:
    def wallsAndGates(self, rooms: List[List[int]]) -> List[List[int]]:
        from collections import deque

        m, n = len(rooms), len(rooms[0])
        INF = 2147483647
        queue = deque((r, c) for r in range(m) for c in range(n) if rooms[r][c] == 0)
        dist = 0
        while queue:
            dist += 1
            for _ in range(len(queue)):
                r, c = queue.popleft()
                for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < m and 0 <= nc < n and rooms[nr][nc] == INF:
                        rooms[nr][nc] = dist
                        queue.append((nr, nc))
        return rooms
