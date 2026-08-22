class Solution:
    def coalesce(self, intervals: list[list[int]]) -> list[list[int]]:
        # Sort by start (end as tiebreaker) so any interval overlapping an
        # earlier one must overlap or touch the most recent coalesced interval;
        # a sweep that only tracks the last coalesced interval then suffices.
        # sorted() also copies, leaving the input untouched.
        ordered = sorted(intervals, key=lambda item: (item[0], item[1]))
        coalesced = []
        for start, end in ordered:
            # `<=` counts touching intervals as overlapping, as required.
            # The start is already covered, so only the right edge matters.
            if coalesced and start <= coalesced[-1][1]:
                # Raise the right edge when larger; an interval fully
                # swallowed by the coalesce leaves it untouched.
                if end > coalesced[-1][1]:
                    coalesced[-1][1] = end
            else:
                # No overlap with the last coalesced interval: new group.
                coalesced.append([start, end])
        return coalesced
