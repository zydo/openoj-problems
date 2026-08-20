class Solution:
    def minCoveringPositions(self, intervals: list[list[int]]) -> int:
        chosen = 0
        # None (not 0) marks "no position chosen yet" since coordinates can be <= 0.
        last_position = None
        # Position-cover greedy: sort by right endpoint and place a position at the
        # right end of the first uncovered interval — among the positions
        # covering it, the right endpoint reaches every interval that any
        # earlier position could.
        for start, end in sorted(intervals, key=lambda x: x[1]):
            # Strict >: intervals are closed, so start == last_position is
            # already covered; otherwise place a position at the earliest end remaining.
            if last_position is None or start > last_position:
                chosen += 1
                last_position = end
        return chosen
