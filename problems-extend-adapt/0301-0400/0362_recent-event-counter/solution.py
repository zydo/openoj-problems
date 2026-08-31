from typing import List


class RecentEventCounter:
    """Parallel arrays of distinct timestamps and their recordEvent counts.

    `recordEvent` bumps the newest count when the second repeats, otherwise
    appends a fresh one; `countRecent` drops everything at or before
    `timestamp - 300` off the front and sums what survives.
    """

    def __init__(self) -> None:
        self.times: List[int] = []
        self.counts: List[int] = []

    def recordEvent(self, timestamp: int) -> None:
        if self.times and self.times[-1] == timestamp:
            # Several hits may arrive at the same second; bumping the
            # newest count keeps one entry per distinct timestamp.
            self.counts[-1] += 1
        else:
            self.times.append(timestamp)
            self.counts.append(1)

    def countRecent(self, timestamp: int) -> int:
        cutoff = timestamp - 300
        while self.times and self.times[0] <= cutoff:
            # The window is (timestamp - 300, timestamp]: a recordEvent at
            # exactly the cutoff second is already gone.
            self.times.pop(0)
            self.counts.pop(0)
        return sum(self.counts)
