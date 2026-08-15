from typing import List


class Solution:
    def minCost(self, nums: List[int], costs: List[int]) -> int:
        n = len(nums)
        next_ge = [-1] * n
        next_sm = [-1] * n
        stack = []
        for i in range(n):
            while stack and nums[i] >= nums[stack[-1]]:
                next_ge[stack.pop()] = i
            stack.append(i)
        stack = []
        for i in range(n):
            while stack and nums[i] < nums[stack[-1]]:
                next_sm[stack.pop()] = i
            stack.append(i)
        inf = 10**18
        dp = [inf] * n
        dp[0] = 0
        for i in range(n - 1):
            for j in (next_ge[i], next_sm[i]):
                if j != -1 and dp[i] + costs[j] < dp[j]:
                    dp[j] = dp[i] + costs[j]
        return dp[n - 1]
