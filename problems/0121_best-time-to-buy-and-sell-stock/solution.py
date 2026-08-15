from typing import List, Optional


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        best = 0
        min_price = prices[0]
        for price in prices:
            if price < min_price:
                min_price = price
            elif price - min_price > best:
                best = price - min_price
        return best
