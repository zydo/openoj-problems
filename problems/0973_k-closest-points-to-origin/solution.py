from typing import List, Optional


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        ordered = sorted(points, key=lambda p: p[0] * p[0] + p[1] * p[1])
        return [list(point) for point in ordered[:k]]
