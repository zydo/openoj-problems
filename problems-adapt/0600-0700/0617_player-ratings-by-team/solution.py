import heapq


class PlayerRatings:
    def __init__(self, players: list[str], teams: list[str], scores: list[int]) -> None:
        self.info: dict[str, tuple[str, int]] = {}
        self.by_cuisine: dict[str, list[tuple[int, str]]] = {}
        for player, team, rating in zip(players, teams, scores):
            self.info[player] = (team, rating)
            # The min of (-rating, name) is exactly the required winner:
            # highest rating first, ties to the smaller name.
            self.by_cuisine.setdefault(team, []).append((-rating, player))
        for heap in self.by_cuisine.values():
            heapq.heapify(heap)

    def setRating(self, player: str, score: int) -> None:
        # Lazy deletion: push a fresh entry and leave the outdated one in the
        # heap as garbage; only the info map holds the current rating.
        team, _ = self.info[player]
        self.info[player] = (team, score)
        heapq.heappush(self.by_cuisine[team], (-score, player))

    def bestPlayer(self, team: str) -> str:
        heap = self.by_cuisine[team]
        while heap:
            rating, player = heap[0]
            # An entry is stale when its rating disagrees with the player's
            # current rating; a valid top is peeked, never consumed.
            if self.info[player][1] == -rating:
                return player
            heapq.heappop(heap)
        return ""
