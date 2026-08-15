from typing import List, Optional


class Solution:
    def longestRepeatingSubstring(self, s: str) -> int:
        n = len(s)

        def has_repeat(length):
            if length == 0:
                return True
            seen = set()
            for i in range(n - length + 1):
                piece = s[i : i + length]
                if piece in seen:
                    return True
                seen.add(piece)
            return False

        lo, hi = 0, n - 1
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if has_repeat(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
