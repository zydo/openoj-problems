from typing import List


class Solution:
    def minimumCost(
        self, m: int, n: int, horizontalCut: List[int], verticalCut: List[int]
    ) -> int:
        hcuts = sorted(horizontalCut, reverse=True)
        vcuts = sorted(verticalCut, reverse=True)
        i = j = 0
        h_made = v_made = 0
        total = 0
        while i < len(hcuts) and j < len(vcuts):
            if hcuts[i] >= vcuts[j]:
                total += hcuts[i] * (v_made + 1)
                i += 1
                h_made += 1
            else:
                total += vcuts[j] * (h_made + 1)
                j += 1
                v_made += 1
        while i < len(hcuts):
            total += hcuts[i] * (v_made + 1)
            i += 1
        while j < len(vcuts):
            total += vcuts[j] * (h_made + 1)
            j += 1
        return total
