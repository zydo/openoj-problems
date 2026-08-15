from typing import List, Optional


class Solution:
    def hIndex(self, citations: List[int]) -> int:
        n = len(citations)
        count = [0] * (n + 1)
        for c in citations:
            count[min(c, n)] += 1
        total = 0
        for h in range(n, -1, -1):
            total += count[h]
            if total >= h:
                return h
        return 0
