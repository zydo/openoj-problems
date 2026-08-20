from typing import List, Optional


class CoverageLedger:
    def __init__(self) -> None:
        raise NotImplementedError("TODO")

    def addSpan(self, start: int, end: int) -> None:
        raise NotImplementedError("TODO")

    def coversSpan(self, start: int, end: int) -> bool:
        raise NotImplementedError("TODO")

    def removeSpan(self, start: int, end: int) -> None:
        raise NotImplementedError("TODO")
