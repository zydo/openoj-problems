import heapq


class Solution:
    def minimumProportionalGroupCost(self, units: list[int], minimumPayments: list[int], groupCount: int) -> float:
        # Sort workers by minimumPayments/units ratio. For each worker as the one paid
        # exactly their minimum minimumPayments (the highest ratio in the chosen group),
        # the best group is the groupCount-1 others with smallest units among cheaper
        # ratios. Maintain a max-heap of chosen qualities.
        workers = sorted(zip(minimumPayments, units), key=lambda w: w[0] / w[1])
        best = float("inf")
        heap = []  # max-heap via negation: qualities of the current candidate group
        total_quality = 0
        for w, q in workers:
            heapq.heappush(heap, -q)
            total_quality += q
            if len(heap) > groupCount:
                total_quality += heapq.heappop(heap)  # removes -(max units)
            if len(heap) == groupCount:
                best = min(best, total_quality * (w / q))
        return best
