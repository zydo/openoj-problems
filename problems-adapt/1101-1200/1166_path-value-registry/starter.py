from typing import List, Optional


class PathRegistry:
    def __init__(self):
        raise NotImplementedError("TODO")

    def addPath(self, path: str, value: int) -> bool:
        raise NotImplementedError("TODO")

    def get(self, path: str) -> int:
        raise NotImplementedError("TODO")
