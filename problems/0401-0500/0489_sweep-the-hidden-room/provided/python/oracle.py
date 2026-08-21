"""The hidden-room sweeper (problem-provided oracle).

Ships with the problem, assembled into every submission's namespace by
the judge, never editable in the editor: the room is invisible, and the
verdict is the exact set of cells the sweeper cleaned. This file is the
implementation; solvers see only the public API documented in the
starter.
"""


class Sweeper:
    DIRECTIONS = [(-1, 0), (0, 1), (1, 0), (0, -1)]  # up, right, down, left

    def __init__(self, room: list[list[int]], start: list[int], budget: int):
        self.room = room
        self.rows, self.cols = len(room), len(room[0]) if room else 0
        self.row, self.col = start
        self.face = 0  # starts facing up
        self.cleaned: set[tuple[int, int]] = set()
        self.budget = budget
        self.clean()

    def _spend(self) -> None:
        if self.budget <= 0:
            raise RuntimeError("Sweeper operation budget exhausted")
        self.budget -= 1

    def move(self) -> bool:  # noqa: N802 — public API
        self._spend()
        dr, dc = self.DIRECTIONS[self.face]
        nr, nc = self.row + dr, self.col + dc
        if not (0 <= nr < self.rows and 0 <= nc < self.cols) or self.room[nr][nc] == 0:
            return False  # wall or blocked cell: stays in place
        self.row, self.col = nr, nc
        return True

    def turnLeft(self) -> None:  # noqa: N802 — public API
        self._spend()
        self.face = (self.face - 1) % 4

    def turnRight(self) -> None:  # noqa: N802 — public API
        self._spend()
        self.face = (self.face + 1) % 4

    def clean(self) -> None:  # noqa: N802 — public API
        self._spend()
        self.cleaned.add((self.row, self.col))

    def verdict(self) -> list[list[int]]:
        return sorted(list(cell) for cell in self.cleaned)
