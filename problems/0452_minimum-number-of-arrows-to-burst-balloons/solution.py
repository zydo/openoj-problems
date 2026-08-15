from typing import List, Optional


class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        arrows = 0
        last_arrow = None
        for start, end in sorted(points, key=lambda x: x[1]):
            if last_arrow is None or start > last_arrow:
                arrows += 1
                last_arrow = end
        return arrows
