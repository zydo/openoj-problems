from typing import List, Optional
from math import gcd


class Solution:
    def countDifferentSubsequenceGCDs(self, nums: List[int]) -> int:
        present = set(nums)
        max_val = max(nums)
        count = 0
        for g in range(1, max_val + 1):
            running = 0
            for multiple in range(g, max_val + 1, g):
                if multiple in present:
                    running = gcd(running, multiple)
                    if running == g:
                        count += 1
                        break
        return count
