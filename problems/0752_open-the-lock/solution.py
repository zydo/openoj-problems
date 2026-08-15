from typing import List, Optional
from collections import deque


class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        dead = set(deadends)
        start = "0000"
        if start in dead:
            return -1
        seen = {start}
        queue = deque([(start, 0)])
        while queue:
            state, steps = queue.popleft()
            if state == target:
                return steps
            for i in range(4):
                for delta in (1, -1):
                    digit = (int(state[i]) + delta) % 10
                    nxt = state[:i] + str(digit) + state[i + 1 :]
                    if nxt not in seen and nxt not in dead:
                        seen.add(nxt)
                        queue.append((nxt, steps + 1))
        return -1
