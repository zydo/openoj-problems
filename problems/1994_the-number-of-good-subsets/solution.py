from typing import List, Optional


class Solution:
    def numberOfGoodSubsets(self, nums: List[int]) -> int:
        MOD = 10**9 + 7
        PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

        def mask_of(x):
            mask = 0
            for i, p in enumerate(PRIMES):
                if x % p == 0:
                    mask |= 1 << i
                    x //= p
                    if x % p == 0:
                        return -1
            return mask

        count = {}
        for v in nums:
            count[v] = count.get(v, 0) + 1

        size = 1 << len(PRIMES)
        dp = [0] * size
        dp[0] = 1
        for value, freq in count.items():
            if value == 1:
                continue
            mask = mask_of(value)
            if mask <= 0:
                continue
            for prev in range(size - 1, -1, -1):
                if dp[prev] and not (prev & mask):
                    dp[prev | mask] = (dp[prev | mask] + dp[prev] * freq) % MOD
        total = sum(dp[1:]) % MOD
        ones = count.get(1, 0)
        return total * pow(2, ones, MOD) % MOD
