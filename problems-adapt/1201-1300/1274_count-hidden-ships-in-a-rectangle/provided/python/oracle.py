"""The hidden ship layout of the counted rectangle (problem-provided oracle).

Ships with the problem, assembled into every submission's namespace by
the judge, never editable in the editor: `hasShips(topRight, bottomLeft)`
answers whether the closed rectangle spanned by those corners holds at
least one ship, boundary included, under a 400-call budget. This file is
the implementation; solvers see only the public API documented in the
starter.
"""


class Ocean:
    def __init__(self, ships: list[list[int]], budget: int):
        self.ships = [tuple(ship) for ship in ships]
        self.budget = budget

    def hasShips(self, topRight: list[int], bottomLeft: list[int]) -> bool:  # noqa: N802,N803 — LeetCode API
        if self.budget <= 0:
            raise RuntimeError("Ocean query budget exhausted")
        self.budget -= 1
        right, top = topRight
        left, bottom = bottomLeft
        return any(left <= x <= right and bottom <= y <= top for x, y in self.ships)
