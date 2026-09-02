from typing import List, Optional


class ScoreBook:
    def __init__(self):
        raise NotImplementedError("TODO")

    def record(self, time: int, score: int):
        raise NotImplementedError("TODO")

    def windowTotal(self, startTime: int, endTime: int) -> int:
        raise NotImplementedError("TODO")
