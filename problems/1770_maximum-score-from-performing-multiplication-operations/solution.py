from typing import List, Optional


class Solution:
    def maximumScore(self, nums: List[int], multipliers: List[int]) -> int:
        m = len(multipliers)
        n = len(nums)
        NEG_INF = float("-inf")
        prev = [0] * (m + 1)
        for i in range(m - 1, -1, -1):
            cur = [NEG_INF] * (m + 1)
            for l in range(0, i + 1):
                r = i - l
                take_left = prev[l + 1] + multipliers[i] * nums[l]
                take_right = prev[l] + multipliers[i] * nums[n - 1 - r]
                cur[l] = take_left if take_left >= take_right else take_right
            prev = cur
        return prev[0]
