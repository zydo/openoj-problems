from typing import List, Optional
from collections import defaultdict


class Solution:
    def countInterestingSubarrays(self, nums: List[int], modulo: int, k: int) -> int:
        count = defaultdict(int)
        count[0] = 1
        pref = 0
        ans = 0
        for x in nums:
            if x % modulo == k:
                pref += 1
            need = (pref - k) % modulo
            ans += count[need]
            count[pref % modulo] += 1
        return ans
