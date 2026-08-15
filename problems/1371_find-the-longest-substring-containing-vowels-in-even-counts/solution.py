from typing import List, Optional


class Solution:
    def findTheLongestSubstring(self, s: str) -> int:
        vowels = {"a": 1, "e": 2, "i": 4, "o": 8, "u": 16}
        first = [-2] * 32
        first[0] = -1
        mask = 0
        best = 0
        for i, ch in enumerate(s):
            if ch in vowels:
                mask ^= vowels[ch]
            if first[mask] != -2:
                if i - first[mask] > best:
                    best = i - first[mask]
            else:
                first[mask] = i
        return best
