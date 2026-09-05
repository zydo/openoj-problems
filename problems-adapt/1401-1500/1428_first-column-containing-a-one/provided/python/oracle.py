"""The hidden row-sorted bit grid (problem-provided oracle).

Ships with the problem, assembled into every submission's namespace by
the judge, never editable in the editor: `get(row, col)` returns one
entry and `dimensions()` the shape, under a 1000-call budget on `get`.
This file is the implementation; solvers see only the public API
documented in the starter.
"""


class BitMatrix:
    def __init__(self, matrix: list[list[int]], budget: int):
        self.matrix = matrix
        self.budget = budget

    def get(self, row: int, col: int) -> int:  # noqa: N802 — LeetCode API
        if self.budget <= 0:
            raise RuntimeError("BitMatrix query budget exhausted")
        self.budget -= 1
        return self.matrix[row][col]

    def dimensions(self) -> list[int]:  # noqa: N802 — LeetCode API
        return [len(self.matrix), len(self.matrix[0]) if self.matrix else 0]
