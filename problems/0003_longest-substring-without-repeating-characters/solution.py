from typing import List, Optional


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        last_seen = {}
        start = 0
        best = 0
        for i, c in enumerate(s):
            if c in last_seen and last_seen[c] >= start:
                start = last_seen[c] + 1
            last_seen[c] = i
            best = max(best, i - start + 1)
        return best
