from typing import List, Optional


class Solution:
    def longestPrefix(self, s: str) -> str:
        n = len(s)
        pi = [0] * n
        j = 0
        for i in range(1, n):
            while j > 0 and s[i] != s[j]:
                j = pi[j - 1]
            if s[i] == s[j]:
                j += 1
            pi[i] = j
        return s[: pi[-1]] if n > 0 else ""
