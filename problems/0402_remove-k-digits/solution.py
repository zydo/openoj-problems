from typing import List, Optional


class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack = []
        for ch in num:
            while k and stack and stack[-1] > ch:
                stack.pop()
                k -= 1
            stack.append(ch)
        if k:
            stack = stack[:-k]
        result = "".join(stack).lstrip("0")
        return result if result else "0"
