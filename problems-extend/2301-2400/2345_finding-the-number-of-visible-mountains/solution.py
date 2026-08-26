from typing import List


class Solution:
    def visibleMountains(self, peaks: List[List[int]]) -> int:
        # (u, v) = (x - y, x + y): mountain b hides peak a iff
        # u_b <= u_a and v_b >= v_a. Sort by u ascending, v descending,
        # then a peak is visible iff its v beats every earlier one strictly.
        points = sorted((x - y, -(x + y)) for x, y in peaks)
        count = 0
        best = None
        i = 0
        while i < len(points):
            u, negv = points[i]
            j = i + 1
            while j < len(points) and points[j] == points[i]:
                j += 1
            if j - i == 1 and (best is None or -negv > best):
                count += 1
            if best is None or -negv > best:
                best = -negv
            i = j
        return count
