from typing import List, Optional

from collections import defaultdict


class Solution:
    def distance(self, nums: List[int]) -> List[int]:
        pos = defaultdict(list)
        for i, x in enumerate(nums):
            pos[x].append(i)
        arr = [0] * len(nums)
        for idxs in pos.values():
            m = len(idxs)
            prefix = [0] * (m + 1)
            for j, i in enumerate(idxs):
                prefix[j + 1] = prefix[j] + i
            for j, i in enumerate(idxs):
                left = i * j - prefix[j]
                right = (prefix[m] - prefix[j + 1]) - i * (m - 1 - j)
                arr[i] = left + right
        return arr
