from typing import List, Optional


class StockPrice:
    def __init__(self) -> None:
        raise NotImplementedError("TODO")

    def update(self, timestamp: int, price: int) -> None:
        raise NotImplementedError("TODO")

    def current(self) -> int:
        raise NotImplementedError("TODO")

    def maximum(self) -> int:
        raise NotImplementedError("TODO")

    def minimum(self) -> int:
        raise NotImplementedError("TODO")
