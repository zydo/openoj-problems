class BookingDepth:
    # Per-instant change in the number of live intervals: +1 where one opens, -1 where one closes.
    def __init__(self) -> None:
        self.delta = {}

    def add(self, start: int, end: int) -> int:
        self.delta[start] = self.delta.get(start, 0) + 1
        self.delta[end] = self.delta.get(end, 0) - 1
        best = 0
        active = 0
        # Sweep boundaries in time order; the running sum is the number of
        # events active at that moment, so its peak is the deepest overlap seen.
        # Changes at one instant merge, so an interval closing where another
        # opens is never counted twice.
        for time in sorted(self.delta):
            active += self.delta[time]
            if active > best:
                best = active
        return best
