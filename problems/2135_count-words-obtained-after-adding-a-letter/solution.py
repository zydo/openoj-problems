from typing import List, Optional


class Solution:
    def wordCount(self, startWords: List[str], targetWords: List[str]) -> int:
        def mask(word):
            m = 0
            for c in word:
                m |= 1 << (ord(c) - 97)
            return m

        starts = {mask(w) for w in startWords}
        count = 0
        for t in targetWords:
            m = mask(t)
            for bit in range(26):
                if m & (1 << bit) and (m ^ (1 << bit)) in starts:
                    count += 1
                    break
        return count
