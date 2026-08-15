from typing import List, Optional


class Solution:
    def findKthNumber(self, n: int, k: int) -> int:
        def count_steps(n, n1, n2):
            steps = 0
            while n1 <= n:
                steps += min(n + 1, n2) - n1
                n1 *= 10
                n2 *= 10
            return steps

        cur = 1
        k -= 1
        while k > 0:
            steps = count_steps(n, cur, cur + 1)
            if steps <= k:
                cur += 1
                k -= steps
            else:
                cur *= 10
                k -= 1
        return cur
