import heapq


class StockPrice:
    def __init__(self) -> None:
        self.price_at: dict[int, int] = {}
        self.latest_timestamp = 0
        self.max_heap: list[tuple[int, int]] = []
        self.min_heap: list[tuple[int, int]] = []

    def update(self, timestamp: int, price: int) -> None:
        self.price_at[timestamp] = price
        if timestamp > self.latest_timestamp:
            self.latest_timestamp = timestamp
        heapq.heappush(self.max_heap, (-price, timestamp))
        heapq.heappush(self.min_heap, (price, timestamp))

    def current(self) -> int:
        return self.price_at[self.latest_timestamp]

    def maximum(self) -> int:
        while True:
            price, timestamp = self.max_heap[0]
            if self.price_at[timestamp] == -price:
                return -price
            heapq.heappop(self.max_heap)

    def minimum(self) -> int:
        while True:
            price, timestamp = self.min_heap[0]
            if self.price_at[timestamp] == price:
                return price
            heapq.heappop(self.min_heap)
