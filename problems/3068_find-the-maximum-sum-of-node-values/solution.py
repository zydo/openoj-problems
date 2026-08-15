from typing import List, Optional


class Solution:
    def maximumValueSum(self, nums: List[int], k: int, edges: List[List[int]]) -> int:
        deltas = [(x ^ k) - x for x in nums]
        positives = [d for d in deltas if d > 0]
        base = sum(nums) + sum(positives)
        if len(positives) % 2 == 0:
            return base
        best = None
        if positives:
            best = min(positives)
        non_positives = [d for d in deltas if d <= 0]
        if non_positives:
            penalty = -max(non_positives)
            if best is None or penalty < best:
                best = penalty
        return base - best
