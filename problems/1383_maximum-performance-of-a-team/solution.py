from typing import List, Optional

import heapq


class Solution:
    def maxPerformance(
        self, n: int, speed: List[int], efficiency: List[int], k: int
    ) -> int:
        MOD = 10**9 + 7
        engineers = sorted(zip(efficiency, speed), reverse=True)
        heap = []
        speed_sum = 0
        best = 0
        for eff, spd in engineers:
            heapq.heappush(heap, spd)
            speed_sum += spd
            if len(heap) > k:
                speed_sum -= heapq.heappop(heap)
            best = max(best, speed_sum * eff)
        return best % MOD
