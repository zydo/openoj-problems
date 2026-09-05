from typing import List


class Solution:
    def excavatedRelics(self, n: int, relics: List[List[int]], digs: List[List[int]]) -> int:
        # Mark every excavated cell once in a boolean grid, then each
        # rectangle test is a constant-time lookup per cell — digs is never
        # rescanned for an artifact.
        dug = [[False] * n for _ in range(n)]
        for r, c in digs:
            dug[r][c] = True
        extracted = 0
        for r1, c1, r2, c2 in relics:
            if all(dug[r][c] for r in range(r1, r2 + 1) for c in range(c1, c2 + 1)):
                extracted += 1
        return extracted
