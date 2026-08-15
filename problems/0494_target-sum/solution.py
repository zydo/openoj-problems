from typing import List, Optional


class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        dp = {0: 1}
        for value in nums:
            nxt = {}
            for total, count in dp.items():
                nxt[total + value] = nxt.get(total + value, 0) + count
                nxt[total - value] = nxt.get(total - value, 0) + count
            dp = nxt
        return dp.get(target, 0)
