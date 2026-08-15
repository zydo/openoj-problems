from typing import List, Optional


class Solution:
    def minKBitFlips(self, nums: List[int], k: int) -> int:
        n = len(nums)
        hint = [0] * n
        flips = 0
        flip = 0
        for i in range(n):
            flip ^= hint[i]
            if (nums[i] ^ flip) == 0:
                if i + k > n:
                    return -1
                flips += 1
                flip ^= 1
                if i + k < n:
                    hint[i + k] ^= 1
        return flips
