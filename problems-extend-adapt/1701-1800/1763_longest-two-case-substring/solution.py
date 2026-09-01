from typing import List, Optional


class Solution:
    def longestTwoCaseSubstring(self, s: str) -> str:
        # A character missing its case-partner anywhere in the string
        # can never sit inside a nice window: split on every offender
        # and recurse. Segments with no offenders are entirely nice.
        if len(s) < 2:
            return ""
        chars = set(s)
        for i, c in enumerate(s):
            if c.swapcase() not in chars:
                left = self.longestTwoCaseSubstring(s[:i])
                right = self.longestTwoCaseSubstring(s[i + 1 :])
                return left if len(left) >= len(right) else right
        return s
