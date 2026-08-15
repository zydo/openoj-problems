from typing import List, Optional


class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        count = 0
        for code in range(ord("a"), ord("z") + 1):
            ch = chr(code)
            first = s.find(ch)
            last = s.rfind(ch)
            if first != -1 and last - first >= 2:
                count += len(set(s[first + 1 : last]))
        return count
