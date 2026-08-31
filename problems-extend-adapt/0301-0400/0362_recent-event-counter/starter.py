from typing import List, Optional


class RecentEventCounter:
    def __init__(self):
        raise NotImplementedError("TODO")

    def recordEvent(self, timestamp: int):
        raise NotImplementedError("TODO")

    def countRecent(self, timestamp: int) -> int:
        raise NotImplementedError("TODO")
