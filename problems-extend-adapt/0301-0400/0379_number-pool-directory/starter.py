from typing import List, Optional


class NumberPool:
    def __init__(self, maxNumbers: int):
        raise NotImplementedError("TODO")

    def acquire(self) -> int:
        raise NotImplementedError("TODO")

    def isAvailable(self, number: int) -> bool:
        raise NotImplementedError("TODO")

    def returnNumber(self, number: int):
        raise NotImplementedError("TODO")
