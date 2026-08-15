from typing import List, Optional


class Solution:
    def earliestFullBloom(self, plantTime: List[int], growTime: List[int]) -> int:
        best = 0
        prefix = 0
        for plant, grow in sorted(zip(plantTime, growTime), key=lambda x: -x[1]):
            prefix += plant
            best = max(best, prefix + grow)
        return best
