from typing import List, Optional


class Solution:
    def smallestNumber(self, pattern: str) -> str:
        result = []
        stack = []
        n = len(pattern)
        for i in range(n + 1):
            stack.append(str(i + 1))
            if i == n or pattern[i] == "I":
                while stack:
                    result.append(stack.pop())
        return "".join(result)
