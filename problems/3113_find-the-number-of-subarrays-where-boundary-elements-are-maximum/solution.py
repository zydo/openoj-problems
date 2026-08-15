from typing import List, Optional


class Solution:
    def numberOfSubarrays(self, nums: List[int]) -> int:
        n = len(nums)
        leftGreater = [-1] * n
        stack = []
        for i, x in enumerate(nums):
            while stack and nums[stack[-1]] <= x:
                stack.pop()
            leftGreater[i] = stack[-1] if stack else -1
            stack.append(i)

        from bisect import bisect_right

        positions = {}
        ans = 0
        for i, x in enumerate(nums):
            lst = positions.setdefault(x, [])
            count = 1 + len(lst) - bisect_right(lst, leftGreater[i])
            ans += count
            lst.append(i)
        return ans
