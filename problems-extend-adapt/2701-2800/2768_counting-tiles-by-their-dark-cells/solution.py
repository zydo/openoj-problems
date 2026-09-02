from typing import List


class Solution:
    def countDarkTiles(self, m: int, n: int, coordinates: List[List[int]]) -> List[int]:
        # Only tiles touched by a dark cell can be non-empty: each cell bumps its
        # up-to-four in-range top-left corners in one hash map.
        counts = {}
        for x, y in coordinates:
            for bx in (x - 1, x):
                for by in (y - 1, y):
                    if 0 <= bx < m - 1 and 0 <= by < n - 1:
                        counts[(bx, by)] = counts.get((bx, by), 0) + 1
        answer = [0] * 5
        # Touched tiles are exactly the map entries, so arr[0] is arithmetic —
        # and (m - 1) * (n - 1) overflows 32 bits on its own for large grids.
        answer[0] = (m - 1) * (n - 1) - len(counts)
        for count in counts.values():
            answer[count] += 1
        return answer
