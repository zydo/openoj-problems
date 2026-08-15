from typing import List, Optional


class Solution:
    def longestPalindrome(self, s: str) -> str:
        def expand(left, right):
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return left + 1, right - 1

        best_start, best_end = 0, 0
        for i in range(len(s)):
            for l, r in (expand(i, i), expand(i, i + 1)):
                if r - l > best_end - best_start:
                    best_start, best_end = l, r
        return s[best_start : best_end + 1]
