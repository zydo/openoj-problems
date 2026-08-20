from typing import List, Optional


class HistoryStore:
    def __init__(self) -> None:
        raise NotImplementedError("TODO")

    def set(self, key: str, value: str, timestamp: int) -> None:
        raise NotImplementedError("TODO")

    def get(self, key: str, timestamp: int) -> str:
        raise NotImplementedError("TODO")
