class PriceLog:
    def __init__(self) -> None:
        raise NotImplementedError("TODO")

    def record(self, timestamp: int, price: int) -> None:
        raise NotImplementedError("TODO")

    def latest(self) -> int:
        raise NotImplementedError("TODO")

    def highest(self) -> int:
        raise NotImplementedError("TODO")

    def lowest(self) -> int:
        raise NotImplementedError("TODO")
