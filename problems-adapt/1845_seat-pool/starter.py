from typing import List, Optional


class SeatPool:
    def __init__(self, n: int) -> None:
        raise NotImplementedError("TODO")

    def reserve(self) -> int:
        raise NotImplementedError("TODO")

    def release(self, seat: int) -> None:
        raise NotImplementedError("TODO")
