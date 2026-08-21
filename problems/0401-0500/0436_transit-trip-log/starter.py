class TransitLog:
    def __init__(self):
        raise NotImplementedError("TODO")

    def tapIn(self, id: int, stop: str, t: int):
        raise NotImplementedError("TODO")

    def tapOut(self, id: int, stop: str, t: int):
        raise NotImplementedError("TODO")

    def averageTrip(self, fromStop: str, toStop: str) -> float:
        raise NotImplementedError("TODO")
