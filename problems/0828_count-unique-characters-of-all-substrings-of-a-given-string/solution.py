from typing import List, Optional


class Solution:
    def uniqueLetterString(self, s: str) -> int:
        positions = [[] for _ in range(26)]
        for i, c in enumerate(s):
            positions[ord(c) - ord("A")].append(i)
        n = len(s)
        total = 0
        for pos in positions:
            if not pos:
                continue
            pos = [-1] + pos + [n]
            for k in range(1, len(pos) - 1):
                total += (pos[k] - pos[k - 1]) * (pos[k + 1] - pos[k])
        return total
