from typing import List, Optional


class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total = sum(nums)
        if total % 2:
            return False
        target = total // 2
        keep = (1 << (target + 1)) - 1
        mask = 1
        for value in nums:
            mask = (mask | (mask << value)) & keep
            if (mask >> target) & 1:
                return True
        return (mask >> target) & 1 == 1
