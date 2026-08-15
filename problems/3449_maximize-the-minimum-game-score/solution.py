from typing import List, Optional


class Solution:
    def maxScore(self, points: List[int], m: int) -> int:
        n = len(points)

        def feasible(target):
            moves = 0
            prev = 0
            for i in range(n):
                gp = points[i]
                remain = (target + gp - 1) // gp - prev
                if remain >= 1:
                    prev = remain - 1
                    moves += 2 * remain - 1
                elif i != n - 1:
                    prev = 0
                    moves += 1
                if moves > m:
                    return False
            return moves <= m

        lo, hi = 0, max(points) * m
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if feasible(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
