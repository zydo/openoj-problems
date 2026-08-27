from typing import List


class Solution:
    def minMoves(self, balance: List[int]) -> int:
        # The single negative person is the only sink; each positive person
        # is a source whose units cost their circular distance to the sink,
        # so the cheapest sources are drained first.
        neg = next((i for i, v in enumerate(balance) if v < 0), -1)
        if neg == -1:
            return 0
        if sum(balance) < 0:
            return -1
        n = len(balance)
        need = -balance[neg]
        sources = []
        for i, v in enumerate(balance):
            if i != neg and v > 0:
                d = min(abs(i - neg), n - abs(i - neg))
                sources.append((d, v))
        sources.sort()
        moves = 0
        for d, v in sources:
            if need == 0:
                break
            take = min(v, need)
            moves += take * d
            need -= take
        return moves
