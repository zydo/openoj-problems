from bisect import bisect_left, bisect_right


class CoverageLedger:
    """Tracked set as canonical disjoint intervals (parallel starts/ends).

    The list stays sorted and gap-separated: adds merge what they overlap or
    touch, removes carve holes, so any fully-tracked query is contained in a
    single stored interval.
    """

    def __init__(self) -> None:
        self.starts: list[int] = []
        self.ends: list[int] = []

    def addSpan(self, start: int, end: int) -> None:
        i = bisect_left(self.ends, start)  # first interval ending at/after start
        j = bisect_right(self.starts, end)  # first interval starting after end
        if i < j:
            start = min(start, self.starts[i])
            end = max(end, self.ends[j - 1])
        self.starts[i:j] = [start]
        self.ends[i:j] = [end]

    def coversSpan(self, start: int, end: int) -> bool:
        i = bisect_right(self.starts, start) - 1  # last interval starting at/before start
        return i >= 0 and self.ends[i] >= end

    def removeSpan(self, start: int, end: int) -> None:
        i = bisect_right(self.ends, start)  # first interval ending after start
        j = bisect_left(self.starts, end)  # first interval starting at/after end
        new_starts = []
        new_ends = []
        if i < j:
            if self.starts[i] < start:
                new_starts.append(self.starts[i])
                new_ends.append(start)
            if self.ends[j - 1] > end:
                new_starts.append(end)
                new_ends.append(self.ends[j - 1])
        self.starts[i:j] = new_starts
        self.ends[i:j] = new_ends
