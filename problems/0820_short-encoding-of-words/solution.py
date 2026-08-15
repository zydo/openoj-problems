from typing import List, Optional


class Solution:
    def minimumLengthEncoding(self, words: List[str]) -> int:
        keep = set(words)
        for w in words:
            for k in range(1, len(w)):
                keep.discard(w[k:])
        return sum(len(w) + 1 for w in keep)
