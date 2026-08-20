from typing import List, Optional


class MovieRentalDesk:
    def __init__(self, n: int, entries: List[List[int]]) -> None:
        raise NotImplementedError("TODO")

    def search(self, movie: int) -> List[int]:
        raise NotImplementedError("TODO")

    def rent(self, shop: int, movie: int) -> None:
        raise NotImplementedError("TODO")

    def handBack(self, shop: int, movie: int) -> None:
        raise NotImplementedError("TODO")

    def report(self) -> List[List[int]]:
        raise NotImplementedError("TODO")
