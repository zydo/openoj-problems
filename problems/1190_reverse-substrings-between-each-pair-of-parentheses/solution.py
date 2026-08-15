from typing import List, Optional


class Solution:
    def reverseParentheses(self, s: str) -> str:
        stack = [[]]
        for ch in s:
            if ch == "(":
                stack.append([])
            elif ch == ")":
                top = stack.pop()
                stack[-1].extend(reversed(top))
            else:
                stack[-1].append(ch)
        return "".join(stack[0])
