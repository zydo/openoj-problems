import heapq


class SeatManager:
    def __init__(self, n: int) -> None:
        self.next_seat = 1
        self.returned: list[int] = []

    def reserve(self) -> int:
        if self.returned and self.returned[0] < self.next_seat:
            return heapq.heappop(self.returned)
        self.next_seat += 1
        return self.next_seat - 1

    def unreserve(self, seatNumber: int) -> None:
        heapq.heappush(self.returned, seatNumber)
