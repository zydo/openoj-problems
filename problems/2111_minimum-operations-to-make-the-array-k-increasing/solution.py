from bisect import bisect_right
from typing import List, Optional


class Solution:
    def kIncreasing(self, arr: List[int], k: int) -> int:
        def longest_nondecreasing(seq):
            tails = []
            for value in seq:
                pos = bisect_right(tails, value)
                if pos == len(tails):
                    tails.append(value)
                else:
                    tails[pos] = value
            return len(tails)

        operations = 0
        for start in range(k):
            sub = arr[start::k]
            operations += len(sub) - longest_nondecreasing(sub)
        return operations
