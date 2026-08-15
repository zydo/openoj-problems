from typing import List, Optional


class Solution:
    def hasAllCodes(self, s: str, k: int) -> bool:
        need = 1 << k
        if len(s) < k:
            return False
        seen = set()
        for i in range(len(s) - k + 1):
            seen.add(s[i : i + k])
            if len(seen) == need:
                return True
        return len(seen) == need
