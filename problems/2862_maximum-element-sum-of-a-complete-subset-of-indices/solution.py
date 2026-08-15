from typing import List, Optional
from collections import defaultdict


class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        def squarefree_part(x):
            result = 1
            d = 2
            while d * d <= x:
                if x % d == 0:
                    count = 0
                    while x % d == 0:
                        x //= d
                        count += 1
                    if count % 2 == 1:
                        result *= d
                d += 1
            if x > 1:
                result *= x
            return result

        groups = defaultdict(int)
        for i in range(1, len(nums) + 1):
            groups[squarefree_part(i)] += nums[i - 1]
        return max(groups.values())
