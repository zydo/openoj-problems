from typing import List, Optional


class PacketBuffer:
    def __init__(self, capacity: int) -> None:
        raise NotImplementedError("TODO")

    def receive(self, source: int, destination: int, timestamp: int) -> bool:
        raise NotImplementedError("TODO")

    def dispatch(self) -> List[int]:
        raise NotImplementedError("TODO")

    def countInWindow(self, destination: int, startTime: int, endTime: int) -> int:
        raise NotImplementedError("TODO")
