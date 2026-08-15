from typing import List


class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        cash, hold = 0, -(10**9)
        for price in prices:
            cash, hold = max(cash, hold + price - fee), max(hold, cash - price)
        return cash
