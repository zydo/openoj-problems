from typing import List, Optional


class Solution:
    def minOperations(self, nums: List[int]) -> int:
        arr = list(nums)
        n = len(arr)
        operations = 0
        for i in range(n - 2):
            if arr[i] == 0:
                operations += 1
                arr[i] ^= 1
                arr[i + 1] ^= 1
                arr[i + 2] ^= 1
        if 0 in arr:
            return -1
        return operations
