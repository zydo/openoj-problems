from typing import List, Optional

MOD = 10**9 + 7


class Solution:
    def totalMinTimesSum(self, power: List[int]) -> int:
        n = len(power)

        # prev[i]: index of nearest strictly-smaller element to the left, else -1.
        prev = [-1] * n
        stack = []
        for i in range(n):
            while stack and power[stack[-1]] >= power[i]:
                stack.pop()
            prev[i] = stack[-1] if stack else -1
            stack.append(i)

        # nxt[i]: index of nearest element <= power[i] to the right, else n.
        nxt = [n] * n
        stack = []
        for i in range(n - 1, -1, -1):
            while stack and power[stack[-1]] > power[i]:
                stack.pop()
            nxt[i] = stack[-1] if stack else n
            stack.append(i)

        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + power[i]

        # pre_prefix[k] = sum of prefix[0..k-1]
        pre_prefix = [0] * (n + 2)
        for i in range(n + 1):
            pre_prefix[i + 1] = pre_prefix[i] + prefix[i]

        answer = 0
        for i in range(n):
            left = i - prev[i]
            right = nxt[i] - i
            sum_left = pre_prefix[i + 1] - pre_prefix[prev[i] + 1]
            sum_right = pre_prefix[nxt[i] + 1] - pre_prefix[i + 1]
            contribution = power[i] * (left * sum_right - right * sum_left)
            answer = (answer + contribution) % MOD
        return answer
