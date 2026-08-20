from typing import List, Optional
import heapq


class Solution:
    def bestAverageSuccessRate(self, batches: List[List[int]], extraTrials: int) -> float:
        def gain(p, t):
            # One more sure trial in batch (p, t) raises its rate by exactly
            # this, and the gain shrinks as the batch grows (concave).
            return (p + 1) / (t + 1) - p / t

        # Average over a fixed batch count, so maximize the rate sum:
        # allocate each identical trial where it buys the most.
        heap = [(-gain(p, t), p, t) for p, t in batches]
        heapq.heapify(heap)
        for _ in range(extraTrials):
            _, p, t = heapq.heappop(heap)
            p += 1
            t += 1
            # Re-push: after absorbing a trial the batch's gain drops and
            # another batch may now offer the best marginal return.
            heapq.heappush(heap, (-gain(p, t), p, t))
        return sum(p / t for _, p, t in heap) / len(heap)
