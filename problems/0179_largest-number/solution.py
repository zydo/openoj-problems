from typing import List, Optional


class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        from functools import cmp_to_key

        strs = [str(n) for n in nums]

        def compare(a, b):
            if a + b > b + a:
                return -1
            if a + b < b + a:
                return 1
            return 0

        strs.sort(key=cmp_to_key(compare))
        result = "".join(strs)
        return "0" if result[0] == "0" else result
