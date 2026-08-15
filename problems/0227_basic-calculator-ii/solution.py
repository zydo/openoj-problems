class Solution:
    def calculate(self, s: str) -> int:
        stack = []
        num = 0
        op = "+"
        last = len(s) - 1
        for i, ch in enumerate(s):
            if ch.isdigit():
                num = num * 10 + int(ch)
            if ch in "+-*/" or i == last:
                if op == "+":
                    stack.append(num)
                elif op == "-":
                    stack.append(-num)
                elif op == "*":
                    stack.append(stack.pop() * num)
                else:
                    prev = stack.pop()
                    quotient = abs(prev) // num
                    stack.append(quotient if prev >= 0 else -quotient)
                op = ch
                num = 0
        return sum(stack)
