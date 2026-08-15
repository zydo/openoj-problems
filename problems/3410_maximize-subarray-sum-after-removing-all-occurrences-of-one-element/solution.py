from typing import List, Optional


class Solution:
    def maxSubarraySum(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        prefix_map = {0: 0}
        prefix_sum = 0
        min_prefix = 0
        result = nums[0]
        for num in nums:
            prefix_sum += num
            if prefix_sum - min_prefix > result:
                result = prefix_sum - min_prefix
            if num < 0:
                if num in prefix_map:
                    prev = prefix_map[num]
                    if prefix_map[0] < prev:
                        prev = prefix_map[0]
                    prefix_map[num] = prev + num
                else:
                    prefix_map[num] = prefix_map[0] + num
                if prefix_map[num] < min_prefix:
                    min_prefix = prefix_map[num]
            if prefix_sum < prefix_map[0]:
                prefix_map[0] = prefix_sum
            if prefix_map[0] < min_prefix:
                min_prefix = prefix_map[0]
        return result
