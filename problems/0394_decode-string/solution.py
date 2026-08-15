from typing import List, Optional


class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        current = ""
        repeat = 0
        for ch in s:
            if ch.isdigit():
                repeat = repeat * 10 + int(ch)
            elif ch == "[":
                stack.append((current, repeat))
                current = ""
                repeat = 0
            elif ch == "]":
                previous, times = stack.pop()
                current = previous + current * times
            else:
                current += ch
        return current
