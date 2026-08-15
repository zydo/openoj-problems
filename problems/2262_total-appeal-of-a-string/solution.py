from typing import List, Optional


class Solution:
    def appealSum(self, s: str) -> int:
        last = {}
        total = 0
        current = 0
        for i, c in enumerate(s):
            current += i - last.get(c, -1)
            last[c] = i
            total += current
        return total
