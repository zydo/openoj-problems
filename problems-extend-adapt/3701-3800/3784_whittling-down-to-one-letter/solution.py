from typing import List, Optional


class Solution:
    def uniformizeCost(self, s: str, cost: List[int]) -> int:
        totals = [0] * 26
        for ch, c in zip(s, cost):
            totals[ord(ch) - ord("a")] += c
        return sum(totals) - max(totals)
