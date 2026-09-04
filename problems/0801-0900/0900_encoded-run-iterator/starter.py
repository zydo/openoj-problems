from typing import List, Optional


class EncodedRunIterator:
    def __init__(self, encoding: List[int]):
        raise NotImplementedError("TODO")

    def consume(self, n: int) -> int:
        raise NotImplementedError("TODO")
