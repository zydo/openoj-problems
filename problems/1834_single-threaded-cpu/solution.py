from typing import List, Optional

import heapq


class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        n = len(tasks)
        by_enqueue = sorted(range(n), key=lambda i: (tasks[i][0], i))
        heap = []
        order = []
        time = 0
        i = 0
        while i < n or heap:
            if not heap:
                time = max(time, tasks[by_enqueue[i]][0])
            while i < n and tasks[by_enqueue[i]][0] <= time:
                j = by_enqueue[i]
                heapq.heappush(heap, (tasks[j][1], j))
                i += 1
            proc, j = heapq.heappop(heap)
            order.append(j)
            time += proc
        return order
