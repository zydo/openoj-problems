class MovieRentalDesk:
    def __init__(self, n: int, entries: list[list[int]]) -> None:
        raise NotImplementedError("TODO")

    def search(self, movie: int) -> list[int]:
        raise NotImplementedError("TODO")

    def rent(self, shop: int, movie: int) -> None:
        raise NotImplementedError("TODO")

    def handBack(self, shop: int, movie: int) -> None:
        raise NotImplementedError("TODO")

    def report(self) -> list[list[int]]:
        raise NotImplementedError("TODO")
