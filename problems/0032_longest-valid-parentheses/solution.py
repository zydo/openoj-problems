from typing import List, Optional


class Solution:
    def longestValidParentheses(self, s: str) -> int:
        stack = [-1]
        best = 0
        for i, ch in enumerate(s):
            if ch == "(":
                stack.append(i)
            else:
                stack.pop()
                if not stack:
                    stack.append(i)
                else:
                    if i - stack[-1] > best:
                        best = i - stack[-1]
        return best
