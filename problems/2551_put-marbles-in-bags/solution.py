from typing import List, Optional


class Solution:
    def putMarbles(self, weights: List[int], k: int) -> int:
        if k == 1:
            return 0
        adj = sorted(weights[i] + weights[i + 1] for i in range(len(weights) - 1))
        m = k - 1
        return sum(adj[-m:]) - sum(adj[:m])
