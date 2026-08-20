class Solution:
    def totalSubarrayMinima(self, nums: list[int]) -> int:
        MOD = 10**9 + 7
        n = len(nums)
        left = [-1] * n
        right = [n] * n
        stack = []
        # left[i]: index of the previous strictly smaller element (pops >=),
        # with -1 letting the dominance span reach the left border.
        for i in range(n):
            while stack and nums[stack[-1]] >= nums[i]:
                stack.pop()
            left[i] = stack[-1] if stack else -1
            stack.append(i)
        stack = []
        # right[i]: next smaller-or-equal element (pops only >). The
        # asymmetry attributes tied minima to the leftmost position, so
        # no subarray is counted twice; n spans to the right border.
        for i in range(n - 1, -1, -1):
            while stack and nums[stack[-1]] > nums[i]:
                stack.pop()
            right[i] = stack[-1] if stack else n
            stack.append(i)
        total = 0
        # nums[i] is the minimum exactly when the subarray's endpoints lie in
        # (left[i], i] x [i, right[i]) — that product counts them all.
        for i in range(n):
            total += nums[i] * (i - left[i]) * (right[i] - i)
        return total % MOD
