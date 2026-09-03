from typing import List


class Solution:
    def evenHopReachable(self, start: List[int], target: List[int]) -> bool:
        return (start[0] + start[1]) % 2 == (target[0] + target[1]) % 2
