from collections import deque
from typing import List, Optional


class Solution:
    def findMaxValueOfEquation(self, points: List[List[int]], k: int) -> int:
        dq = deque()  # indices with y - x strictly decreasing
        best = -(10**18)
        for j, (xj, yj) in enumerate(points):
            while dq and xj - points[dq[0]][0] > k:
                dq.popleft()
            if dq:
                i = dq[0]
                xi, yi = points[i]
                value = yj + yi + xj - xi
                if value > best:
                    best = value
            while dq and points[dq[-1]][1] - points[dq[-1]][0] <= yj - xj:
                dq.pop()
            dq.append(j)
        return best
