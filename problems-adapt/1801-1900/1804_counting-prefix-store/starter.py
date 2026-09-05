from typing import List, Optional


class PrefixStore:
    def __init__(self):
        raise NotImplementedError("TODO")

    def insert(self, word: str):
        raise NotImplementedError("TODO")

    def countExact(self, word: str) -> int:
        raise NotImplementedError("TODO")

    def countPrefixed(self, prefix: str) -> int:
        raise NotImplementedError("TODO")

    def erase(self, word: str):
        raise NotImplementedError("TODO")
