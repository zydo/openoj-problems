from typing import List, Optional


class Solution:
    def shiftingLetters(self, s: str, shifts: List[List[int]]) -> str:
        n = len(s)
        diff = [0] * (n + 1)
        for start, end, direction in shifts:
            delta = 1 if direction == 1 else -1
            diff[start] += delta
            diff[end + 1] -= delta
        chars = []
        shift = 0
        for i, c in enumerate(s):
            shift += diff[i]
            chars.append(chr((ord(c) - 97 + shift) % 26 + 97))
        return "".join(chars)
