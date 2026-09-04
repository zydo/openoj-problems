"""Problem-provided oracle (KindOracle). Assembled into every
submission by the judge; never editable in the editor. This file is the
hidden implementation — solvers see only the public API documented in
the starter."""


class KindOracle:
    """Oracle for 2782 counting-the-distinct-kinds: n elements with a
    fixed kind each; the assignment array is hidden and only
    hasSameKind reveals it. Every query spends budget."""

    def __init__(self, kinds: list[int], budget: int):
        self.kinds = list(kinds)
        self.budget = budget

    def hasSameKind(self, a: int, b: int) -> bool:  # noqa: N802 — LeetCode API
        if self.budget <= 0:
            raise RuntimeError("KindOracle query budget exhausted")
        self.budget -= 1
        if not (0 <= a < len(self.kinds)) or not (0 <= b < len(self.kinds)):
            return False
        return self.kinds[a] == self.kinds[b]
