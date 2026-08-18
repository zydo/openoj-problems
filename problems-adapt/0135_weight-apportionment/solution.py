from typing import List, Optional


class Solution:
    def apportion(self, scores: List[int]) -> int:
        n = len(scores)
        # A weight of one everywhere is the floor the rules allow.
        weights = [1] * n
        # Left-to-right: satisfy the left-hand rule with the smallest value
        # that clears the position on the left.
        for i in range(1, n):
            if scores[i] > scores[i - 1]:
                weights[i] = weights[i - 1] + 1
        # Right-to-left: the mirror rule. Taking a max only raises a weight,
        # never lowers one, so this sweep cannot break what the first settled.
        for i in range(n - 2, -1, -1):
            if scores[i] > scores[i + 1]:
                weights[i] = max(weights[i], weights[i + 1] + 1)
        return sum(weights)
