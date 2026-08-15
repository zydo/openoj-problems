from typing import List, Optional


class Solution:
    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:
        prefix = [0]
        for x in arr:
            prefix.append(prefix[-1] ^ x)
        return [prefix[r + 1] ^ prefix[l] for l, r in queries]
