from typing import List, Optional


class Solution:
    def countBits(self, n: int) -> List[int]:
        ans = [0] * (n + 1)
        # i >> 1 drops the low bit, so its popcount is already computed;
        # i & 1 adds the dropped bit back. Ascending order keeps it ready.
        for i in range(1, n + 1):
            ans[i] = ans[i >> 1] + (i & 1)
        return ans
