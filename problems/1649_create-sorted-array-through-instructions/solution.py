from typing import List, Optional


class Solution:
    def createSortedArray(self, instructions: List[int]) -> int:
        MOD = 10**9 + 7
        m = max(instructions)
        tree = [0] * (m + 1)

        def update(i: int) -> None:
            while i <= m:
                tree[i] += 1
                i += i & (-i)

        def query(i: int) -> int:
            s = 0
            while i > 0:
                s += tree[i]
                i -= i & (-i)
            return s

        total = 0
        count = 0
        for x in instructions:
            less = query(x - 1)
            greater = count - query(x)
            total = (total + min(less, greater)) % MOD
            update(x)
            count += 1
        return total
