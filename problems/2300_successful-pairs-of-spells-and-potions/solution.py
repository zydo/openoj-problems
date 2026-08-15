from typing import List, Optional
from bisect import bisect_left


class Solution:
    def successfulPairs(
        self, spells: List[int], potions: List[int], success: int
    ) -> List[int]:
        potions = sorted(potions)
        m = len(potions)
        result = []
        for spell in spells:
            need = (success + spell - 1) // spell
            result.append(m - bisect_left(potions, need))
        return result
