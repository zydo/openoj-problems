from typing import List, Optional


class MemoryMap:
    def __init__(self, n: int):
        raise NotImplementedError("TODO")

    def allocate(self, size: int, mID: int) -> int:
        raise NotImplementedError("TODO")

    def freeMemory(self, mID: int) -> int:
        raise NotImplementedError("TODO")
