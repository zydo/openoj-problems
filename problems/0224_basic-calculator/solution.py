from typing import List, Optional


class Solution:
    def calculate(self, s: str) -> int:
        result = 0
        sign = 1
        num = 0
        stack = []
        for ch in s:
            if ch.isdigit():
                num = num * 10 + int(ch)
            elif ch == "+":
                result += sign * num
                num = 0
                sign = 1
            elif ch == "-":
                result += sign * num
                num = 0
                sign = -1
            elif ch == "(":
                stack.append(result)
                stack.append(sign)
                result = 0
                sign = 1
            elif ch == ")":
                result += sign * num
                num = 0
                result = result * stack.pop() + stack.pop()
            # spaces are ignored
        return result + sign * num
