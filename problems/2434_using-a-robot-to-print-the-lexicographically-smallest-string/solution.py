from typing import List, Optional


class Solution:
    def robotWithString(self, s: str) -> str:
        n = len(s)
        high = chr(127)
        suffix_min = [high] * (n + 1)
        for i in range(n - 1, -1, -1):
            suffix_min[i] = min(s[i], suffix_min[i + 1])
        stack = []
        out = []
        for i in range(n):
            while stack and stack[-1] <= suffix_min[i]:
                out.append(stack.pop())
            stack.append(s[i])
        while stack:
            out.append(stack.pop())
        return "".join(out)
