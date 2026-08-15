from typing import List, Optional


class Solution:
    def findMaximums(self, nums: List[int]) -> List[int]:
        n = len(nums)
        left = [-1] * n
        right = [n] * n
        stack = []
        for i in range(n):
            while stack and nums[stack[-1]] >= nums[i]:
                stack.pop()
            left[i] = stack[-1] if stack else -1
            stack.append(i)
        stack = []
        for i in range(n - 1, -1, -1):
            while stack and nums[stack[-1]] >= nums[i]:
                stack.pop()
            right[i] = stack[-1] if stack else n
            stack.append(i)
        ans = [0] * n
        for i in range(n):
            length = right[i] - left[i] - 1
            if nums[i] > ans[length - 1]:
                ans[length - 1] = nums[i]
        for i in range(n - 2, -1, -1):
            if ans[i + 1] > ans[i]:
                ans[i] = ans[i + 1]
        return ans
