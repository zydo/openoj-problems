class UndergroundSystem:
    def __init__(self) -> None:
        self.checkins: dict[int, tuple[str, int]] = {}
        self.totals: dict[tuple[str, str], list[int]] = {}

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.checkins[id] = (stationName, t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        start, started = self.checkins.pop(id)
        bucket = self.totals.setdefault((start, stationName), [0, 0])
        bucket[0] += t - started
        bucket[1] += 1

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        total, count = self.totals[(startStation, endStation)]
        return total / count
