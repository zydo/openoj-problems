class Solution:
    def countSubarraysWithExtremes(self, nums: list[int], lo: int, hi: int) -> int:
        count = 0
        # most recent positions of an out-of-range element, of lo, of hi
        last_bad = -1
        last_min = -1
        last_max = -1
        for i, x in enumerate(nums):
            if x < lo or x > hi:
                # a valid subarray ending anywhere later must start after i
                last_bad = i
            # tracking the last occurrence is enough: it covers earlier ones
            if x == lo:
                last_min = i
            if x == hi:
                last_max = i
            # each right end contributes its own starts: after last_bad but at
            # or before min(last_min, last_max), so both extremes are included
            count += max(0, min(last_min, last_max) - last_bad)
        return count
