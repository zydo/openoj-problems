from typing import List, Optional


class Solution:
    def maximumGain(self, s: str, x: int, y: int) -> int:
        def remove_pairs(text, first, second, points):
            stack = []
            score = 0
            for c in text:
                if stack and stack[-1] == first and c == second:
                    stack.pop()
                    score += points
                else:
                    stack.append(c)
            return "".join(stack), score

        if x >= y:
            rest, score1 = remove_pairs(s, "a", "b", x)
            _, score2 = remove_pairs(rest, "b", "a", y)
        else:
            rest, score1 = remove_pairs(s, "b", "a", y)
            _, score2 = remove_pairs(rest, "a", "b", x)
        return score1 + score2
