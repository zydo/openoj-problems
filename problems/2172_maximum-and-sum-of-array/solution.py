from typing import List, Optional


class Solution:
    def maximumANDSum(self, nums: List[int], numSlots: int) -> int:
        positions = 2 * numSlots
        dp = [-1] * (1 << positions)
        dp[0] = 0
        best = 0
        for mask in range(1 << positions):
            if dp[mask] < 0:
                continue
            i = bin(mask).count("1")
            if i == len(nums):
                best = max(best, dp[mask])
                continue
            for p in range(positions):
                if not mask & (1 << p):
                    nxt = dp[mask] + (nums[i] & (p // 2 + 1))
                    slot_mask = mask | (1 << p)
                    if nxt > dp[slot_mask]:
                        dp[slot_mask] = nxt
        return best
