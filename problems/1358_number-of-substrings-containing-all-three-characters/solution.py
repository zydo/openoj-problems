from typing import List, Optional


class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        last = [-1, -1, -1]
        count = 0
        for i, ch in enumerate(s):
            if ch == "a" or ch == "b" or ch == "c":
                last[ord(ch) - ord("a")] = i
            count += min(last[0], last[1], last[2]) + 1
        return count
