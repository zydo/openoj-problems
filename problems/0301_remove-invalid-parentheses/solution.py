from typing import List, Optional


class Solution:
    def removeInvalidParentheses(self, s: str) -> List[str]:
        def is_valid(string):
            count = 0
            for ch in string:
                if ch == "(":
                    count += 1
                elif ch == ")":
                    count -= 1
                    if count < 0:
                        return False
            return count == 0

        level = {s}
        while True:
            valid = sorted(item for item in level if is_valid(item))
            if valid:
                return valid
            next_level = set()
            for item in level:
                for i, ch in enumerate(item):
                    if ch in "()":
                        next_level.add(item[:i] + item[i + 1 :])
            level = next_level
