from typing import List


class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        total = sum(nums)
        if total % k:
            return False
        target = total // k
        nums.sort(reverse=True)
        if nums[0] > target:
            return False
        n = len(nums)
        full = (1 << n) - 1
        memo = {}

        def dfs(mask, curr):
            if mask == full:
                return True
            if curr == target:
                return dfs(mask, 0)
            key = (mask, curr)
            if key in memo:
                return memo[key]
            for i in range(n):
                if not (mask >> i) & 1 and curr + nums[i] <= target:
                    if dfs(mask | (1 << i), curr + nums[i]):
                        memo[key] = True
                        return True
            memo[key] = False
            return False

        return dfs(0, 0)
