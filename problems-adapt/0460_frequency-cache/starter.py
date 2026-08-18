from typing import List, Optional


class FrequencyCache:
    def __init__(self, capacity: int) -> None:
        raise NotImplementedError("TODO")

    def get(self, key: int) -> int:
        raise NotImplementedError("TODO")

    def put(self, key: int, value: int) -> None:
        raise NotImplementedError("TODO")
