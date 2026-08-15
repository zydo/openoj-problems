from typing import List, Optional


class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        n = len(cardPoints)
        total = sum(cardPoints)
        window = n - k
        current = sum(cardPoints[:window])
        best = current
        for i in range(window, n):
            current += cardPoints[i] - cardPoints[i - window]
            best = min(best, current)
        return total - best
