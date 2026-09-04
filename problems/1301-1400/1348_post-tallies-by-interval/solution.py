from bisect import bisect_left, insort
from typing import List


class PostTally:
    """Per-name sorted time lists; a query slices its window into chunks and
    counts each chunk with two binary searches."""

    CHUNKS = {"minute": 60, "hour": 3600, "day": 86400}

    def __init__(self):
        self._times = {}

    def recordPost(self, name: str, time: int) -> None:
        insort(self._times.setdefault(name, []), time)

    def countsPerInterval(self, span: str, name: str, startTime: int, endTime: int) -> List[int]:
        chunk = self.CHUNKS[span]
        times = self._times.get(name, [])
        buckets = []
        lo = startTime
        while lo <= endTime:
            hi = min(lo + chunk - 1, endTime)
            # Times in [lo, hi]: bisect range over the sorted list.
            buckets.append(bisect_left(times, hi + 1) - bisect_left(times, lo))
            lo += chunk
        return buckets
