from typing import List, Optional


class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        counts = {"a": a, "b": b, "c": c}
        result = []
        while True:
            ranked = sorted(counts.items(), key=lambda item: (-item[1], item[0]))
            letter, remaining = ranked[0]
            if remaining == 0:
                break
            if len(result) >= 2 and result[-1] == letter and result[-2] == letter:
                letter, remaining = ranked[1]
                if remaining == 0:
                    break
            result.append(letter)
            counts[letter] -= 1
        return "".join(result)
