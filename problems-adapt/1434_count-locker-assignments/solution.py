from typing import List, Optional


class Solution:
    def countLockerAssignments(self, lockers: List[List[int]]) -> int:
        MOD = 10**9 + 7
        n = len(lockers)
        full = (1 << n) - 1
        h2p = [[] for _ in range(41)]
        for p, prefs in enumerate(lockers):
            for h in prefs:
                h2p[h].append(p)
        # dp[mask]: ways to give a locker to exactly the people in mask using lockers so far
        # (<=10 people -> 1024 states; lockers fold into the loop dimension)
        dp = [0] * (full + 1)
        dp[0] = 1
        for h in range(1, 41):
            people = h2p[h]
            if not people:
                continue
            # copy encodes leaving this locker unused; updating into the copy
            # (reading old dp) also ensures no locker is taken by two people
            ndp = dp[:]
            for mask in range(full + 1):
                v = dp[mask]
                if not v:
                    continue
                for p in people:
                    bit = 1 << p
                    if not mask & bit:
                        ndp[mask | bit] = (ndp[mask | bit] + v) % MOD
            dp = ndp
        # full mask: every person gets a locker; unused lockers cost nothing
        return dp[full]
