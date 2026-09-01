from typing import List


class Solution:
    def kLeastGuardedRows(self, mat: List[List[int]], k: int) -> List[int]:
        # Weakness order == lexicographic order of (guards, index); rows
        # are all 1's then 0's, so the sum is the first-unmanned index too.
        ranked = sorted((sum(row), index) for index, row in enumerate(mat))
        return [index for _, index in ranked[:k]]
