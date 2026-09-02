from typing import List


class Solution:
    def maxBrewEnergy(self, brewA: List[int], brewB: List[int]) -> int:
        # A plan that drinks A at hour i either drank A at hour i-1 or
        # drank B at hour i-2 and idled through the cleanse hour i-1, so
        # dpA[i] = max(dpA[i-1], dpB[i-2]) + brewA[i] and
        # symmetrically for B. Four rolling variables carry the current
        # pair and the one-hour-older pair.
        a = brewA[0] + brewA[1]
        b = brewB[0] + brewB[1]
        old_a, old_b = brewA[0], brewB[0]
        for i in range(2, len(brewA)):
            a, b, old_a, old_b = (
                max(a, old_b) + brewA[i],
                max(b, old_a) + brewB[i],
                a,
                b,
            )
        return max(a, b)
