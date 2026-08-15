from typing import List, Optional


class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        counts = [0] * 60
        total = 0
        for duration in time:
            remainder = duration % 60
            total += counts[(60 - remainder) % 60]
            counts[remainder] += 1
        return total
