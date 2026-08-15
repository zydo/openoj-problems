from typing import List
from collections import deque


class Solution:
    def maxResult(self, nums: List[int], k: int) -> int:
        n = len(nums)
        dp = [0] * n
        dp[0] = nums[0]
        window = deque([0])
        for i in range(1, n):
            while window[0] < i - k:
                window.popleft()
            dp[i] = nums[i] + dp[window[0]]
            while window and dp[window[-1]] <= dp[i]:
                window.pop()
            window.append(i)
        return dp[n - 1]
