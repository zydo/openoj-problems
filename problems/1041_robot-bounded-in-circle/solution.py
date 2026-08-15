from typing import List, Optional


class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        x, y = 0, 0
        dx, dy = 0, 1  # north
        for ch in instructions:
            if ch == "G":
                x += dx
                y += dy
            elif ch == "L":
                dx, dy = -dy, dx
            else:  # 'R'
                dx, dy = dy, -dx
        return (x, y) == (0, 0) or (dx, dy) != (0, 1)
