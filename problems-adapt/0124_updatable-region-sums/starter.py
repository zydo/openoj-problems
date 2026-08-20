from typing import List, Optional


class UpdatableRegions:
    def __init__(self, matrix: List[List[int]]) -> None:
        raise NotImplementedError("TODO")

    def setValue(self, row: int, col: int, value: int) -> None:
        raise NotImplementedError("TODO")

    def regionSum(self, top: int, left: int, bottom: int, right: int) -> int:
        raise NotImplementedError("TODO")
