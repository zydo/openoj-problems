import heapq


class Solution:
    def cheapestPickSum(self, costs: list[int], k: int, window: int) -> int:
        n = len(costs)
        # Windows overlap => every remaining worker is always eligible,
        # so the greedy is just "hire the k cheapest overall".
        if 2 * window >= n:
            return sum(sorted(costs)[:k])
        # (cost, index) tuples: heap order breaks cost ties by smaller index.
        left = [(costs[i], i) for i in range(window)]
        right = [(costs[i], i) for i in range(n - window, n)]
        heapq.heapify(left)
        heapq.heapify(right)
        # i feeds left and j feeds right from the untouched middle; i <= j
        # guards against inserting a middle worker twice.
        i, j = window, n - window - 1
        total = 0
        for _ in range(k):
            # Cheaper top wins; '<=' prefers left on ties.
            if not right or (left and left[0] <= right[0]):
                cost, _idx = heapq.heappop(left)
                if i <= j:
                    heapq.heappush(left, (costs[i], i))
                    i += 1
            else:
                cost, _idx = heapq.heappop(right)
                if i <= j:
                    heapq.heappush(right, (costs[j], j))
                    j -= 1
            total += cost
        return total
