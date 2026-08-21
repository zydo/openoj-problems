class Solution:
    def largestWaterArea(self, heights: list[int]) -> int:
        # Start with the widest possible container, one pointer at each end.
        left, right = 0, len(heights) - 1
        best = 0
        while left < right:
            # Area = width x the shorter wall: water above it would spill.
            best = max(best, (right - left) * min(heights[left], heights[right]))
            # Moving the taller wall inward can never help -- the area stays
            # capped by the shorter wall while the width falls -- so the
            # shorter wall's current pair is the best it can ever be part of
            # and it is safe to discard. Ties move right, equally correct.
            if heights[left] < heights[right]:
                left += 1
            else:
                right -= 1
        return best
