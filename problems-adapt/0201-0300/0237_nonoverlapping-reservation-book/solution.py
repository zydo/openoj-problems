from bisect import bisect_right
class ReservationBook:
    """Accepted reservations as parallel sorted starts/ends arrays.

    A new event can only conflict with the reservation before and after its
    insertion point; binary search locates them in O(log n).
    """

    def __init__(self) -> None:
        self.starts: list[int] = []
        self.ends: list[int] = []

    def reserveSlot(self, start: int, end: int) -> bool:
        index = bisect_right(self.starts, start) - 1
        # Half-open intervals: strict tests mean touching endpoints coexist.
        if index >= 0 and self.ends[index] > start:
            return False
        if index + 1 < len(self.starts) and self.starts[index + 1] < end:
            return False
        # Insert exactly at the searched position — stays sorted, no re-sort.
        self.starts.insert(index + 1, start)
        self.ends.insert(index + 1, end)
        return True
