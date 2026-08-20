from typing import List, Optional


class PlayerRatings:
    def __init__(self, players: List[str], teams: List[str], scores: List[int]) -> None:
        raise NotImplementedError("TODO")

    def setRating(self, player: str, score: int) -> None:
        raise NotImplementedError("TODO")

    def bestPlayer(self, team: str) -> str:
        raise NotImplementedError("TODO")
