from typing import List, Optional


class Solution:
    def shortestPalindrome(self, s: str) -> str:
        rev = s[::-1]
        combined = s + "#" + rev
        n = len(combined)
        lps = [0] * n
        for i in range(1, n):
            j = lps[i - 1]
            while j > 0 and combined[i] != combined[j]:
                j = lps[j - 1]
            if combined[i] == combined[j]:
                j += 1
            lps[i] = j
        pal_len = lps[-1] if n else 0
        return rev[: len(s) - pal_len] + s
