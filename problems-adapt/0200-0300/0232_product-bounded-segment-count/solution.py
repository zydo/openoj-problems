from typing import List, Optional


class Solution:
    def countProductBoundedSegments(self, values: List[int], limit: int) -> int:
        # Products are at least 1 (elements >= 1), so limit <= 1 admits nothing.
        if limit <= 1:
            return 0
        count = 0
        product = 1
        left = 0
        for right, value in enumerate(values):
            product *= value
            # Shrink from the left until [left, right] is the longest window
            # ending here with product strictly below limit.
            while product >= limit:
                product //= values[left]
                left += 1
            # Every window suffix also ends at right and has a smaller product:
            # right - left + 1 segments, each counted once by its right end.
            count += right - left + 1
        return count
