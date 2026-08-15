from typing import List, Optional


class Solution:
    def wonderfulSubstrings(self, word: str) -> int:
        count = [0] * 1024
        count[0] = 1
        mask = 0
        total = 0
        for ch in word:
            mask ^= 1 << (ord(ch) - ord("a"))
            total += count[mask]
            for b in range(10):
                total += count[mask ^ (1 << b)]
            count[mask] += 1
        return total
