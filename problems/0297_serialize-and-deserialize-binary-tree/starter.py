from typing import List, Optional


class Codec:
    def __init__(self) -> None:
        raise NotImplementedError("TODO")

    def serialize(self, root: List[int]) -> str:
        raise NotImplementedError("TODO")

    def deserialize(self, data: str) -> List[int]:
        raise NotImplementedError("TODO")
