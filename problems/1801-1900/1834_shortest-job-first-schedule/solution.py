import heapq


class Solution:
    def processingOrder(self, jobs: list[list[int]]) -> list[int]:
        n = len(jobs)
        # Indices pre-sorted by (enqueueTime, index): the arrival stream only moves forward.
        by_enqueue = sorted(range(n), key=lambda i: (jobs[i][0], i))
        heap = []  # min-heap of (processingTime, index) — the CPU's selection rule
        order = []
        time = 0
        i = 0
        while i < n or heap:
            if not heap:
                # CPU idle: jump straight to the next arrival instead of ticking.
                time = max(time, jobs[by_enqueue[i]][0])
            # Enqueue everything available at this instant BEFORE popping, so all
            # contenders compete under the same (processingTime, index) order.
            while i < n and jobs[by_enqueue[i]][0] <= time:
                j = by_enqueue[i]
                heapq.heappush(heap, (jobs[j][1], j))
                i += 1
            proc, j = heapq.heappop(heap)
            order.append(j)  # winner: shortest processing time, smallest index on ties
            time += proc  # clock advances by exactly the winner's duration
        return order
