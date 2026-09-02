from typing import List, Optional


class PriorityRoster:
    def __init__(self, events: List[List[int]]):
        raise NotImplementedError("TODO")

    def updatePriority(self, eventId: int, newPriority: int):
        raise NotImplementedError("TODO")

    def pollHighest(self) -> int:
        raise NotImplementedError("TODO")
