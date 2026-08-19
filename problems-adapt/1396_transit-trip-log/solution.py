class TransitLog:
    def __init__(self) -> None:
        # trips in flight: id -> (station, t). Only the pending check-in
        # is needed until the customer checks out
        self.checkins: dict[int, tuple[str, int]] = {}
        # completed trips keyed by ordered station pair -> [total time, count]
        self.totals: dict[tuple[str, str], list[int]] = {}

    def tapIn(self, id: int, stop: str, t: int) -> None:
        self.checkins[id] = (stop, t)

    def tapOut(self, id: int, stop: str, t: int) -> None:
        start, started = self.checkins.pop(id)
        # the trip collapses to one duration folded into a per-pair sum+count;
        # consuming the check-in frees the id to travel again immediately
        bucket = self.totals.setdefault((start, stop), [0, 0])
        bucket[0] += t - started
        bucket[1] += 1

    def averageTrip(self, fromStop: str, toStop: str) -> float:
        # no durations are ever stored — just divide the running totals
        total, count = self.totals[(fromStop, toStop)]
        return total / count
