from typing import List


class Solution:
    def pairSumInOrder(self, nums: List[int], target: int) -> List[int]:
        left, right = 0, len(nums) - 1
        while left < right:
            total = nums[left] + nums[right]
            if total == target:
                # 1-based indices as the problem expects.
                return [left + 1, right + 1]
            if total < target:
                # Too small: pairing nums[left] with anything smaller than
                # nums[right] only lowers the sum — retire the left value.
                left += 1
            else:
                # Too large: retire the right value symmetrically.
                right -= 1
        # Unreachable under the uniqueness promise; keeps the function total.
        return []
