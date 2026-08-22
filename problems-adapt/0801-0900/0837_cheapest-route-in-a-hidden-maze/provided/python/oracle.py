"""The hidden maze (problem-provided oracle).

Ships with the problem, assembled into every submission's namespace by
the judge, never editable in the editor: `canMove` probes a direction,
`move` walks one cell (reporting the cost of the entered cell — 1 on a
plain open cell), `isTarget` marks the goal. This file is the
implementation; solvers see only the public API documented in the
starter.
"""


class MazeController:
    """Interactive oracle for hidden-maze problems (invocation type
    "interactive"). Mirrors the Java / C++ / Go / Rust / JS / TS twins
    exactly."""

    DELTAS = {"U": (-1, 0), "D": (1, 0), "L": (0, -1), "R": (0, 1)}

    def __init__(self, grid: list[list[int]], start: list[int], target: list[int], budget: int):
        self.cost = grid
        self.rows, self.cols = len(grid), len(grid[0]) if grid else 0
        self.row, self.col = start
        self.target_row, self.target_col = target
        self.budget = budget

    def _spend(self) -> None:
        if self.budget <= 0:
            raise RuntimeError("MazeController query budget exhausted")
        self.budget -= 1

    def _enterable(self, row: int, col: int) -> bool:
        return 0 <= row < self.rows and 0 <= col < self.cols and self.cost[row][col] > 0

    def canMove(self, direction: str) -> bool:  # noqa: N802 — judge API
        self._spend()
        delta_row, delta_col = self.DELTAS[direction]
        return self._enterable(self.row + delta_row, self.col + delta_col)

    def move(self, direction: str) -> int:
        self._spend()
        delta_row, delta_col = self.DELTAS[direction]
        row, col = self.row + delta_row, self.col + delta_col
        if not self._enterable(row, col):
            return -1
        self.row, self.col = row, col
        return self.cost[row][col]

    def isTarget(self) -> bool:  # noqa: N802 — judge API
        self._spend()
        return (self.row, self.col) == (self.target_row, self.target_col)
