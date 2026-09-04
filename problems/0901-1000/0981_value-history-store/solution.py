from bisect import bisect_left


class HistoryStore:
    """Per-key parallel (values, timestamps) lists, binary-searched on get.

    Set timestamps are strictly increasing, so each history stays sorted by
    construction; get finds the rightmost timestamp <= t.
    """

    def __init__(self) -> None:
        self.values: dict[str, list[str]] = {}
        self.stamps: dict[str, list[int]] = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.values.setdefault(key, []).append(value)
        self.stamps.setdefault(key, []).append(timestamp)

    def get(self, key: str, timestamp: int) -> str:
        stamps = self.stamps.get(key)
        if not stamps:
            return ""
        index = bisect_left(stamps, timestamp + 1) - 1
        if index < 0:
            return ""
        return self.values[key][index]
