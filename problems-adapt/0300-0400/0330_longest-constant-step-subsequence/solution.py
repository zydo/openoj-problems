class Solution:
    def longestConstantStepSubsequence(self, nums: list[int]) -> int:
        # dp[i][d] = length of the longest constant-step subsequence ending at i
        # with common difference d.
        n = len(nums)
        dp = [dict() for _ in range(n)]
        best = 1
        for i in range(n):
            for j in range(i):
                d = nums[i] - nums[j]
                length = dp[j].get(d, 1) + 1
                if length > dp[i].get(d, 1):
                    dp[i][d] = length
                    if length > best:
                        best = length
        return best
