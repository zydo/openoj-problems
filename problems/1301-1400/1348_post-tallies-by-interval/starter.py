from typing import List, Optional


class PostTally:
    def __init__(self):
        raise NotImplementedError("TODO")

    def recordPost(self, name: str, time: int):
        raise NotImplementedError("TODO")

    def countsPerInterval(self, span: str, name: str, startTime: int, endTime: int) -> List[int]:
        raise NotImplementedError("TODO")
