from typing import List, Optional
from collections import Counter


class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        def longest(sub):
            if not sub:
                return 0
            counts = Counter(sub)
            rare = [ch for ch, count in counts.items() if count < k]
            if not rare:
                return len(sub)
            rare_set = set(rare)
            best = 0
            piece = []
            for ch in sub:
                if ch in rare_set:
                    best = max(best, longest("".join(piece)))
                    piece = []
                else:
                    piece.append(ch)
            best = max(best, longest("".join(piece)))
            return best

        return longest(s)
