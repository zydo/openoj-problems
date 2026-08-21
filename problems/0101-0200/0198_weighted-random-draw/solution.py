import random
from bisect import bisect_left


class Solution:
    """Prefix sums lay the weights end to end over [0, total); one uniform
    draw lands in exactly one segment, so index i comes back with
    probability exactly weights[i] / total."""

    def __init__(self, weights: list[int]) -> None:
        self.prefix = [0] * (len(weights) + 1)
        for i, weight in enumerate(weights):
            self.prefix[i + 1] = self.prefix[i] + weight

    def drawIndex(self) -> int:
        target = random.randrange(1, self.prefix[-1] + 1)
        return bisect_left(self.prefix, target) - 1
