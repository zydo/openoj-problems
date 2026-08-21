class PriceLog:
    def __init__(self):
        raise NotImplementedError("TODO")

    def record(self, timestamp: int, price: int):
        raise NotImplementedError("TODO")

    def latest(self) -> int:
        raise NotImplementedError("TODO")

    def highest(self) -> int:
        raise NotImplementedError("TODO")

    def lowest(self) -> int:
        raise NotImplementedError("TODO")
