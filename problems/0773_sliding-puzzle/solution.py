from typing import List, Optional
from collections import deque


class Solution:
    def slidingPuzzle(self, board: List[List[int]]) -> int:
        target = (1, 2, 3, 4, 5, 0)
        neighbors = {
            0: (1, 3),
            1: (0, 2, 4),
            2: (1, 5),
            3: (0, 4),
            4: (3, 5, 1),
            5: (2, 4),
        }
        start = tuple(v for row in board for v in row)
        if start == target:
            return 0
        visited = {start}
        queue = deque([(start, 0)])
        while queue:
            state, moves = queue.popleft()
            zero = state.index(0)
            for nxt in neighbors[zero]:
                new_state = list(state)
                new_state[zero], new_state[nxt] = new_state[nxt], new_state[zero]
                new_state = tuple(new_state)
                if new_state == target:
                    return moves + 1
                if new_state not in visited:
                    visited.add(new_state)
                    queue.append((new_state, moves + 1))
        return -1
