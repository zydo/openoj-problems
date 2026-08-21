from collections import deque


class Solution:
    def longestAffordableStretch(self, startCosts: list[int], usageCosts: list[int], budget: int) -> int:
        n = len(startCosts)
        dq = deque()  # indices with decreasing startCosts
        run = 0
        left = 0
        best = 0
        # cost max(startCosts) + k * sum(usageCosts) is monotone in the
        # window, so a two-pointer sweep maximizes length under the budget
        for right in range(n):
            # back indices with charge <= the new one can never be the max
            while dq and startCosts[dq[-1]] <= startCosts[right]:
                dq.pop()
            dq.append(right)
            run += usageCosts[right]
            # over budget: shrink from the left, dropping the front (the
            # argmax) once left passes it; the window may empty to length 0
            while dq and startCosts[dq[0]] + (right - left + 1) * run > budget:
                if dq[0] == left:
                    dq.popleft()
                run -= usageCosts[left]
                left += 1
            best = max(best, right - left + 1)
        return best
