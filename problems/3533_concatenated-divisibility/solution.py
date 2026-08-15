from typing import List, Optional


class Solution:
    def concatenatedDivisibility(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        lens = [len(str(x)) for x in nums]
        pow10 = [1] * 8
        for i in range(1, 8):
            pow10[i] = pow10[i - 1] * 10

        full = (1 << n) - 1
        dp = [[False] * k for _ in range(1 << n)]
        dp[full][0] = True
        for mask in range(full - 1, -1, -1):
            for rem in range(k):
                for i in range(n):
                    if not (mask >> i) & 1:
                        nrem = (rem * pow10[lens[i]] + nums[i]) % k
                        if dp[mask | (1 << i)][nrem]:
                            dp[mask][rem] = True
                            break

        if not dp[0][0]:
            return []

        order = sorted(range(n), key=lambda i: nums[i])
        res = []
        mask = 0
        rem = 0
        for _ in range(n):
            for i in order:
                if not (mask >> i) & 1:
                    nrem = (rem * pow10[lens[i]] + nums[i]) % k
                    if dp[mask | (1 << i)][nrem]:
                        res.append(nums[i])
                        mask |= 1 << i
                        rem = nrem
                        break
        return res
