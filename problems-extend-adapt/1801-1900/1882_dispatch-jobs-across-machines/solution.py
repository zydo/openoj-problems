import heapq


class Solution:
    def dispatchJobs(self, machines: List[int], jobs: List[int]) -> List[int]:
        # free is ordered (weight, index); busy is ordered by release
        # time. Drain finished machines, wait for the earliest if needed,
        # then hand the task to the smallest free server.
        free = [(w, i) for i, w in enumerate(machines)]
        heapq.heapify(free)
        busy = []
        ans = []
        cur = 0
        for j, cost in enumerate(jobs):
            cur = max(cur, j)
            while busy and busy[0][0] <= cur:
                _, w, i = heapq.heappop(busy)
                heapq.heappush(free, (w, i))
            if not free:
                cur = busy[0][0]
                while busy and busy[0][0] <= cur:
                    _, w, i = heapq.heappop(busy)
                    heapq.heappush(free, (w, i))
            w, i = heapq.heappop(free)
            heapq.heappush(busy, (cur + cost, w, i))
            ans.append(i)
        return ans
