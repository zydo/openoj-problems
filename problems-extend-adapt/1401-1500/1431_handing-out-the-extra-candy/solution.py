from typing import List


class Solution:
    def canLeadAfterBonus(self, candies: List[int], extraCandies: int) -> List[bool]:
        maximum = max(candies)
        return [count + extraCandies >= maximum for count in candies]
