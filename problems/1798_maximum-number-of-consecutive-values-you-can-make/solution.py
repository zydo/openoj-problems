from typing import List, Optional


class Solution:
    def getMaximumConsecutive(self, coins: List[int]) -> int:
        reachable = 0
        for coin in sorted(coins):
            if coin > reachable + 1:
                break
            reachable += coin
        return reachable + 1
