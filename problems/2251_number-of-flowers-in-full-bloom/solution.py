from typing import List, Optional
from bisect import bisect_left, bisect_right


class Solution:
    def fullBloomFlowers(
        self, flowers: List[List[int]], people: List[int]
    ) -> List[int]:
        starts = sorted(f[0] for f in flowers)
        ends = sorted(f[1] for f in flowers)
        # blooming at t: start <= t and end >= t
        return [bisect_right(starts, t) - bisect_left(ends, t) for t in people]
