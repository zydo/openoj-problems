from typing import List, Optional
from collections import Counter


class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False
        counts = Counter(hand)
        for value in sorted(counts):
            need = counts[value]
            if need > 0:
                for next_value in range(value, value + groupSize):
                    if counts[next_value] < need:
                        return False
                    counts[next_value] -= need
        return True
