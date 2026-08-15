from typing import List, Optional


class Solution:
    def separateSquares(self, squares: List[List[int]]) -> float:
        total = sum(l * l for _, _, l in squares)
        target = total / 2.0
        lo = 0.0
        hi = float(max(y + l for _, y, l in squares))
        for _ in range(60):
            mid = (lo + hi) / 2.0
            below = 0.0
            for x, y, l in squares:
                if mid <= y:
                    continue
                below += (min(mid, y + l) - y) * l
            if below >= target:
                hi = mid
            else:
                lo = mid
        return hi
