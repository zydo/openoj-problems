from typing import List, Optional


class Solution:
    def findMinFibonacciNumbers(self, k: int) -> int:
        fibs = [1, 1]
        while fibs[-1] + fibs[-2] <= k:
            fibs.append(fibs[-1] + fibs[-2])
        count = 0
        index = len(fibs) - 1
        while k > 0:
            while fibs[index] > k:
                index -= 1
            k -= fibs[index]
            count += 1
        return count
