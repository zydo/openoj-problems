from typing import List, Optional


class Solution:
    def threeForTwoTotal(self, cost: List[int]) -> int:
        values = sorted(cost, reverse=True)
        return sum(value for index, value in enumerate(values) if index % 3 != 2)
