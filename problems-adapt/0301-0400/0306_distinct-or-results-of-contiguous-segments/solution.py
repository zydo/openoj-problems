class Solution:
    def countDistinctSegmentOrs(self, values: list[int]) -> int:
        seen = set()
        # current: distinct OR values of subarrays ending at this index.
        current = set()
        for x in values:
            # Every subarray ending here is [x] alone or an old suffix OR
            # extended by x; OR never clears bits, so current stays small
            # (at most ~b+1 values for b-bit numbers).
            nxt = {x | y for y in current}
            nxt.add(x)
            current = nxt
            seen |= current
        return len(seen)
