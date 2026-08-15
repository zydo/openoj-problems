from typing import List, Optional


class Solution:
    def evaluateExpression(self, expression: str) -> int:
        def parse(i):
            ch = expression[i]
            if ch == "-" or ch.isdigit():
                j = i + 1 if ch == "-" else i
                while j < len(expression) and expression[j].isdigit():
                    j += 1
                return int(expression[i:j]), j
            op = expression[i : i + 3]
            i += 4
            a, i = parse(i)
            i += 1
            b, i = parse(i)
            i += 1
            if op == "add":
                return a + b, i
            if op == "sub":
                return a - b, i
            if op == "mul":
                return a * b, i
            return a // b, i

        value, _ = parse(0)
        return value
