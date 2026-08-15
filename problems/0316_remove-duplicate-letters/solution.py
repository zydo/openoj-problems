from typing import List, Optional


class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        count = {}
        for ch in s:
            count[ch] = count.get(ch, 0) + 1
        stack = []
        in_stack = set()
        for ch in s:
            count[ch] -= 1
            if ch in in_stack:
                continue
            while stack and stack[-1] > ch and count[stack[-1]] > 0:
                in_stack.remove(stack.pop())
            stack.append(ch)
            in_stack.add(ch)
        return "".join(stack)
