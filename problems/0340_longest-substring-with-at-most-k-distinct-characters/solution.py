from typing import List, Optional


class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
        counts = {}
        left = 0
        best = 0
        for right, ch in enumerate(s):
            counts[ch] = counts.get(ch, 0) + 1
            while len(counts) > k:
                c = s[left]
                counts[c] -= 1
                if counts[c] == 0:
                    del counts[c]
                left += 1
            if right - left + 1 > best:
                best = right - left + 1
        return best
