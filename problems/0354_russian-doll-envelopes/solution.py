from typing import List, Optional
from bisect import bisect_left


class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        envelopes = sorted(envelopes, key=lambda e: (e[0], -e[1]))
        tails = []
        for _, h in envelopes:
            i = bisect_left(tails, h)
            if i == len(tails):
                tails.append(h)
            else:
                tails[i] = h
        return len(tails)
