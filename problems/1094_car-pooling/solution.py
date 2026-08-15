from typing import List, Optional


class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        diff = [0] * 1001
        for num, start, end in trips:
            diff[start] += num
            diff[end] -= num
        used = 0
        for delta in diff:
            used += delta
            if used > capacity:
                return False
        return True
