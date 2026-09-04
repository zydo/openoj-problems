"""Problem-provided oracle (BitStream). Assembled into every
submission by the judge; never editable in the editor. This file
is the hidden implementation — solvers see only the public API
documented in the starter."""


class BitStream:
    """Oracle for 3037 first-pattern-match-in-a-bit-stream-ii: next() yields
    one bit at a time from a (finite but generous) recorded prefix."""

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
