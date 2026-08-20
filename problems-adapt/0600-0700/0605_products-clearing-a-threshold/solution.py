from typing import List, Optional
from bisect import bisect_left


class Solution:
    def countClearingProducts(self, factors: List[int], values: List[int], threshold: int) -> List[int]:
        # a pair works iff factor * value >= threshold, i.e. value >= need;
        # qualifying values are exactly the strongest suffix of the sorted list
        values = sorted(values)
        m = len(values)
        result = []
        for factor in factors:
            # ceil(threshold / factor) in integer arithmetic: exact even at 1e10
            need = (threshold + factor - 1) // factor
            # bisect_left counts values strictly below need; the rest qualify
            result.append(m - bisect_left(values, need))
        return result
