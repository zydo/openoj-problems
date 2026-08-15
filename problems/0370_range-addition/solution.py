from typing import List, Optional


class Solution:
    def getModifiedArray(self, length: int, updates: List[List[int]]) -> List[int]:
        diff = [0] * (length + 1)
        for start, end, inc in updates:
            diff[start] += inc
            diff[end + 1] -= inc
        arr = []
        cur = 0
        for i in range(length):
            cur += diff[i]
            arr.append(cur)
        return arr
