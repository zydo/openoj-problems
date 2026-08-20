from typing import List, Optional
from collections import Counter


class Solution:
    def arrangeIntoConsecutiveRuns(self, entries: List[int], runLength: int) -> bool:
        # A divisible entries must be a multiple of runLength long.
        if len(entries) % runLength != 0:
            return False
        counts = Counter(entries)
        # Walk distinct values in sorted order: the smallest remaining
        # value must start its groups — nothing smaller exists to
        # extend downward.
        for value in sorted(counts):
            need = counts[value]
            if need > 0:
                # Each of the next runLength-1 values must supply at
                # least `need` cards; subtracting in bulk keeps this to
                # one pass per starting value.
                for next_value in range(value, value + runLength):
                    if counts[next_value] < need:
                        return False
                    counts[next_value] -= need
        # Exhausted values reach the loop at count 0 and skip for
        # free; consuming the smallest fully makes the rest a smaller
        # instance of the same problem.
        return True
