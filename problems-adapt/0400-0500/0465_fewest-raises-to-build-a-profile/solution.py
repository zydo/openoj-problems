class Solution:
    def fewestRaises(self, heights: list[int]) -> int:
        # Each operation is one horizontal layer of the final profile, and the
        # first heights[0] layers must all span index 0.
        ops = heights[0]
        for i in range(1, len(heights)):
            # The profile can only rise where a new operation starts, so pay
            # each positive rise; descents are free because earlier layers
            # can simply stop before index i.
            if heights[i] > heights[i - 1]:
                ops += heights[i] - heights[i - 1]
        return ops
