from collections import deque


class Solution:
    def rollingWindowMaxima(self, nums: list[int], k: int) -> list[int]:
        dq = deque()  # indices, values decreasing
        result = []
        for i, value in enumerate(nums):
            while dq and nums[dq[-1]] <= value:
                dq.pop()
            dq.append(i)
            if dq[0] <= i - k:
                dq.popleft()
            if i >= k - 1:
                result.append(nums[dq[0]])
        return result
