class ScoreTable:
    """A player-id -> score map; topScores(count) sorts the values on demand."""

    def __init__(self):
        self.scores = {}

    def recordScore(self, playerId: int, score: int):
        self.scores[playerId] = self.scores.get(playerId, 0) + score

    def topScores(self, count: int) -> int:
        # Removing on reset (not zeroing) keeps zeros out of this sort.
        return sum(sorted(self.scores.values(), reverse=True)[:count])

    def reset(self, playerId: int):
        del self.scores[playerId]
