from typing import List, Optional


class Solution:
    def subarrayBitwiseORs(self, arr: List[int]) -> int:
        seen = set()
        current = set()
        for x in arr:
            nxt = {x | y for y in current}
            nxt.add(x)
            current = nxt
            seen |= current
        return len(seen)
