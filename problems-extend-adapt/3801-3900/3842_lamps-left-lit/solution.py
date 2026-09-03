from typing import List


class Solution:
    def lampsStillLit(self, lamps: List[int]) -> List[int]:
        # Toggle a fixed table indexed by lamp number; a lamp ends on exactly when
        # it is toggled an odd number of times. Sweep indices 1..100 and collect
        # the on positions — ascending order for free.
        on = [False] * 101
        for value in lamps:
            on[value] = not on[value]
        return [i for i in range(1, 101) if on[i]]
