from typing import List, Optional
from collections import deque


class Solution:
    def maximumRobots(
        self, chargeTimes: List[int], runningCosts: List[int], budget: int
    ) -> int:
        n = len(chargeTimes)
        dq = deque()  # indices with decreasing chargeTimes
        run = 0
        left = 0
        best = 0
        for right in range(n):
            while dq and chargeTimes[dq[-1]] <= chargeTimes[right]:
                dq.pop()
            dq.append(right)
            run += runningCosts[right]
            while dq and chargeTimes[dq[0]] + (right - left + 1) * run > budget:
                if dq[0] == left:
                    dq.popleft()
                run -= runningCosts[left]
                left += 1
            best = max(best, right - left + 1)
        return best
