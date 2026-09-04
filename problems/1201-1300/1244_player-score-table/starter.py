from typing import List, Optional


class ScoreTable:
    def __init__(self):
        raise NotImplementedError("TODO")

    def recordScore(self, playerId: int, score: int):
        raise NotImplementedError("TODO")

    def topScores(self, K: int) -> int:
        raise NotImplementedError("TODO")

    def reset(self, playerId: int):
        raise NotImplementedError("TODO")
