from typing import List, Optional


class AffineSequence:
    def __init__(self):
        raise NotImplementedError("TODO")

    def append(self, val: int):
        raise NotImplementedError("TODO")

    def shiftAll(self, inc: int):
        raise NotImplementedError("TODO")

    def scaleAll(self, m: int):
        raise NotImplementedError("TODO")

    def getIndex(self, idx: int) -> int:
        raise NotImplementedError("TODO")
