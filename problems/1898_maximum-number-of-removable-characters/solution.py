from typing import List, Optional


class Solution:
    def maximumRemovals(self, s: str, p: str, removable: List[int]) -> int:
        def still_subsequence(removed):
            pi = 0
            plen = len(p)
            for i, ch in enumerate(s):
                if i in removed:
                    continue
                if pi < plen and ch == p[pi]:
                    pi += 1
            return pi == plen

        lo, hi = 0, len(removable)
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if still_subsequence(set(removable[:mid])):
                lo = mid
            else:
                hi = mid - 1
        return lo
