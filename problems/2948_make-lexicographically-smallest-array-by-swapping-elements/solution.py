from typing import List, Optional


class Solution:
    def lexicographicallySmallestArray(self, nums: List[int], limit: int) -> List[int]:
        n = len(nums)
        pairs = sorted((nums[i], i) for i in range(n))
        result = [0] * n
        i = 0
        while i < n:
            j = i
            while j + 1 < n and pairs[j + 1][0] - pairs[j][0] <= limit:
                j += 1
            indices = sorted(pairs[pos][1] for pos in range(i, j + 1))
            for pos, (value, _) in zip(indices, pairs[i : j + 1]):
                result[pos] = value
            i = j + 1
        return result
