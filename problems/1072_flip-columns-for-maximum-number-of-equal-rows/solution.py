from typing import List, Optional


class Solution:
    def maxEqualRowsAfterFlips(self, matrix: List[List[int]]) -> int:
        counts = {}
        for row in matrix:
            key = tuple(value ^ row[0] for value in row)
            counts[key] = counts.get(key, 0) + 1
        return max(counts.values())
