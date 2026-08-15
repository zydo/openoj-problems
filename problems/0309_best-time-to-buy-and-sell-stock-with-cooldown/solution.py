from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        hold, sold, rest = -(10**9), 0, 0
        for price in prices:
            prev_sold = sold
            hold = max(hold, rest - price)
            sold = hold + price
            rest = max(rest, prev_sold)
        return max(sold, rest)
