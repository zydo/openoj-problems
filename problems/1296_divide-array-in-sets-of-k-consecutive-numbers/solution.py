from typing import List, Optional
from collections import Counter


class Solution:
    def isPossibleDivide(self, nums: List[int], k: int) -> bool:
        if len(nums) % k != 0:
            return False
        counts = Counter(nums)
        for value in sorted(counts):
            need = counts[value]
            if need <= 0:
                continue
            for i in range(value, value + k):
                if counts[i] < need:
                    return False
                counts[i] -= need
        return True
