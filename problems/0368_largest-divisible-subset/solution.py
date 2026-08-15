from typing import List, Optional


class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        nums = sorted(nums)
        n = len(nums)
        if n == 0:
            return []
        dp = [1] * n
        parent = [-1] * n
        best = 0
        for i in range(n):
            for j in range(i):
                if nums[i] % nums[j] == 0 and dp[j] + 1 > dp[i]:
                    dp[i] = dp[j] + 1
                    parent[i] = j
            if dp[i] > dp[best]:
                best = i
        result = []
        i = best
        while i != -1:
            result.append(nums[i])
            i = parent[i]
        result.reverse()
        return result
