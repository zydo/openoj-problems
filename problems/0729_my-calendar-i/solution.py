from bisect import bisect_right
from typing import List


class MyCalendar:
    """Accepted bookings as parallel sorted starts/ends arrays.

    A new event can only conflict with the booking before and after its
    insertion point; binary search locates them in O(log n).
    """

    def __init__(self) -> None:
        self.starts: List[int] = []
        self.ends: List[int] = []

    def book(self, startTime: int, endTime: int) -> bool:
        index = bisect_right(self.starts, startTime) - 1
        if index >= 0 and self.ends[index] > startTime:
            return False
        if index + 1 < len(self.starts) and self.starts[index + 1] < endTime:
            return False
        self.starts.insert(index + 1, startTime)
        self.ends.insert(index + 1, endTime)
        return True
