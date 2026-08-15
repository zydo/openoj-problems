from typing import List


class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        n = len(prices)
        if n < 2 or k == 0:
            return 0
        if k >= n // 2:
            # The limit can never bind: sum every upward move.
            return sum(max(prices[i + 1] - prices[i], 0) for i in range(n - 1))
        buy = [float("-inf")] * (k + 1)
        sell = [0] * (k + 1)
        for price in prices:
            for j in range(1, k + 1):
                buy[j] = max(buy[j], sell[j - 1] - price)
                sell[j] = max(sell[j], buy[j] + price)
        return sell[k]
