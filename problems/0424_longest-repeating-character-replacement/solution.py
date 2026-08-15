from typing import List, Optional


class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = [0] * 128
        best = 0
        left = 0
        max_freq = 0
        for right, ch in enumerate(s):
            c = ord(ch)
            count[c] += 1
            if count[c] > max_freq:
                max_freq = count[c]
            while (right - left + 1) - max_freq > k:
                count[ord(s[left])] -= 1
                left += 1
            if right - left + 1 > best:
                best = right - left + 1
        return best
