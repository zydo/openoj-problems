from typing import List, Optional


class Solution:
    def minNumberOperations(self, target: List[int]) -> int:
        ops = target[0]
        for i in range(1, len(target)):
            if target[i] > target[i - 1]:
                ops += target[i] - target[i - 1]
        return ops
