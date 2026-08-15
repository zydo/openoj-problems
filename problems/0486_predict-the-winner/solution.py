from typing import List, Optional


class Solution:
    def predictTheWinner(self, nums: List[int]) -> bool:
        n = len(nums)
        # dp[i] = best (player-to-move score - opponent score) on the current
        # window ending at j, processed by increasing window length.
        dp = list(nums)
        for length in range(2, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                dp[i] = max(nums[i] - dp[i + 1], nums[j] - dp[i])
        return dp[0] >= 0
