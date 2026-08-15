from typing import List, Optional

from math import gcd


class Solution:
    def countPairs(self, nums: List[int], k: int) -> int:
        counts = {}
        for num in nums:
            g = gcd(num, k)
            counts[g] = counts.get(g, 0) + 1

        total = 0
        gs = list(counts)
        for i in range(len(gs)):
            for j in range(i, len(gs)):
                if (gs[i] * gs[j]) % k:
                    continue
                if i == j:
                    c = counts[gs[i]]
                    total += c * (c - 1) // 2
                else:
                    total += counts[gs[i]] * counts[gs[j]]
        return total
