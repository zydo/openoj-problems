from typing import List, Optional


class Solution:
    def countExcellentPairs(self, nums: List[int], k: int) -> int:
        counts = {}
        for x in set(nums):
            b = bin(x).count("1")
            counts[b] = counts.get(b, 0) + 1
        answer = 0
        for b1, c1 in counts.items():
            for b2, c2 in counts.items():
                if b1 + b2 >= k:
                    answer += c1 * c2
        return answer
