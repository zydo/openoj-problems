"""The bit channel searched for a pattern (problem-provided oracle).

Ships with the problem, assembled into every submission's namespace by
the judge, never editable in the editor: `next()` hands out one bit of a
finite but generous recorded prefix, in order and without rewinding,
under a 1 000 000-call budget. This file is the implementation; solvers
see only the public API documented in the starter.
"""


class BitStream:
    def __init__(self, bits: list[int], budget: int):
        self.bits = bits
        self.budget = budget
        self.position = 0

    def next(self) -> int:  # noqa: N802 — LeetCode API
        if self.budget <= 0:
            raise RuntimeError("BitStream query budget exhausted")
        self.budget -= 1
        value = self.bits[self.position]
        self.position += 1
        return value
