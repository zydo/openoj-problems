from typing import List, Optional
from bisect import bisect_left


class Solution:
    def minOperations(self, target: List[int], arr: List[int]) -> int:
        index = {value: i for i, value in enumerate(target)}
        tails = []
        for value in arr:
            if value not in index:
                continue
            pos = bisect_left(tails, index[value])
            if pos == len(tails):
                tails.append(index[value])
            else:
                tails[pos] = index[value]
        return len(target) - len(tails)
