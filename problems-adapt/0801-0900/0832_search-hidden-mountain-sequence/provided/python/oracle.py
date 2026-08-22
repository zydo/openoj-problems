"""The hidden mountain sequence (problem-provided oracle).

Ships with the problem, assembled into every submission's namespace by
the judge, never editable in the editor: get(index) answers a value and
spends one unit of a hard call budget, length() is free. This file is
the implementation; solvers see only the public API documented in the
starter.
"""


class MountainReader:
    def __init__(self, mountain: list[int], budget: int):
        self.mountain = mountain
        self.budget = budget

    def get(self, index: int) -> int:  # noqa: N802 — public API
        if self.budget <= 0:
            raise RuntimeError("MountainReader query budget exhausted")
        self.budget -= 1
        if not 0 <= index < len(self.mountain):
            raise IndexError("MountainReader index out of range")
        return self.mountain[index]

    def length(self) -> int:  # noqa: N802 — public API
        return len(self.mountain)
