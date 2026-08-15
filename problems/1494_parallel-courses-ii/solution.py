from itertools import combinations
from typing import List


class Solution:
    def minNumberOfSemesters(self, n: int, relations: List[List[int]], k: int) -> int:
        # prereq[i] = bitmask of courses that must precede course i.
        prereq = [0] * n
        for prev, nxt in relations:
            prereq[nxt - 1] |= 1 << (prev - 1)
        full = (1 << n) - 1
        unreachable = n + 1
        dp = [unreachable] * (full + 1)
        dp[0] = 0
        for mask in range(full):
            steps = dp[mask]
            if steps == unreachable:
                continue
            avail = 0
            for course in range(n):
                if not (mask >> course) & 1 and (prereq[course] & ~mask) == 0:
                    avail |= 1 << course
            if not avail:
                continue
            bits = [course for course in range(n) if (avail >> course) & 1]
            if len(bits) <= k:
                nxt = mask | avail
                if steps + 1 < dp[nxt]:
                    dp[nxt] = steps + 1
            else:
                # Taking an extra available course never hurts, so only
                # semesters that take exactly k courses need examining.
                for combo in combinations(bits, k):
                    nxt = mask
                    for course in combo:
                        nxt |= 1 << course
                    if steps + 1 < dp[nxt]:
                        dp[nxt] = steps + 1
        return dp[full]
