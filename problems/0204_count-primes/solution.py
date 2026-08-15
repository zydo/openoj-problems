from typing import List, Optional


class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 3:
            return 0
        is_prime = bytearray([1]) * n
        is_prime[0] = is_prime[1] = 0
        i = 2
        while i * i < n:
            if is_prime[i]:
                is_prime[i * i :: i] = bytearray(len(range(i * i, n, i)))
            i += 1
        return sum(is_prime)
