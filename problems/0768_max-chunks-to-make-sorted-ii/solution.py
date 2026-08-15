from typing import List, Optional


class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        ordered = sorted(arr)
        counts = {}
        balance = 0
        chunks = 0
        for a, b in zip(arr, ordered):
            counts[a] = counts.get(a, 0) + 1
            balance += 1 if counts[a] > 0 else -1
            counts[b] = counts.get(b, 0) - 1
            balance += 1 if counts[b] < 0 else -1
            if balance == 0:
                chunks += 1
        return chunks
