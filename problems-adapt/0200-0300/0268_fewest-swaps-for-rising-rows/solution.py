from typing import List, Optional


class Solution:
    def fewestSwapsForRisingRows(self, top: List[int], bottom: List[int]) -> int:
        n = len(top)
        # Only two configurations matter per index — pair kept or
        # swapped — and swap starts at 1: swapping index 0 costs one op.
        keep, swap = 0, 1
        for i in range(1, n):
            nkeep = nswap = float("inf")
            a1, b1 = top[i - 1], bottom[i - 1]
            a2, b2 = top[i], bottom[i]
            # Natural ordering licenses consistent choices: keep
            # follows keep, swap follows swap (paying one more op).
            if a1 < a2 and b1 < b2:
                nkeep = min(nkeep, keep)
                nswap = min(nswap, swap + 1)
            # Crossed ordering licenses flipping the choice at i
            # relative to i-1.
            if a1 < b2 and b1 < a2:
                nkeep = min(nkeep, swap)
                nswap = min(nswap, keep + 1)
            # Both conditions may hold; solvability guarantees one does.
            keep, swap = nkeep, nswap
        return min(keep, swap)
