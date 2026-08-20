from typing import List, Optional


class Solution:
    def longestCommonSubsequence(self, s: str, t: str) -> int:
        m, n = len(s), len(t)
        # dp row for the empty prefix of s (all zeros); each new row only
        # reads the row above, so two rows suffice
        prev = [0] * (n + 1)
        for i in range(1, m + 1):
            curr = [0] * (n + 1)
            c = s[i - 1]
            for j in range(1, n + 1):
                if c == t[j - 1]:
                    # aligning matching last chars is always safe: extend
                    # the LCS of both shorter prefixes
                    curr[j] = prev[j - 1] + 1
                else:
                    # an optimal LCS discards at least one of the two
                    # characters, so take the better of dropping either
                    curr[j] = max(prev[j], curr[j - 1])
            prev = curr
        return prev[n]
