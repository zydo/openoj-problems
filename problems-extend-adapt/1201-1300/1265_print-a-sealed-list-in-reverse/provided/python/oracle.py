"""The immutable-list-node API (problem-provided oracle).

Ships with the problem, assembled into every submission's namespace by
the judge, never editable in the editor: the case's linked list is
materialized internally and only `sealedListNode` is handed to the solution —
every other node is reachable solely through `successor()`. `emitValue`
records into an ordered transcript that becomes the judged output. This
file is the implementation; solvers see only the public API documented
in the starter.
"""


class SealedListNode:
    """The judge-constructed sealedListNode node.

    The harness hands this object itself to the solution as `sealedListNode`, so it
    exposes emitValue/successor directly; successor nodes are lightweight
    views sharing the same transcript and budget.
    """

    def __init__(self, sealedListNode: str, budget: int):
        values = [int(part) for part in sealedListNode.split(",")] if sealedListNode else []
        self._values = values
        self._next = {i: i + 1 for i in range(len(values) - 1)}
        self._budget = budget
        self.transcript: list[int] = []

    def _view(self, position: int) -> "SealedListNode._View":
        return SealedListNode._View(position, self)

    def emitValue(self) -> None:  # noqa: N802 — LeetCode API
        self._view(0).emitValue()

    def successor(self):  # noqa: N802 — LeetCode API
        return self._view(0).successor()

    def verdict(self):
        """The observable effect: the exact sequence of printed values."""
        return list(self.transcript)

    class _View:
        __slots__ = ("_position", "_owner")

        def __init__(self, position: int, owner: "SealedListNode"):
            self._position = position
            self._owner = owner

        def emitValue(self) -> None:
            if self._owner._budget <= 0:
                raise RuntimeError("SealedListNode query budget exhausted")
            self._owner._budget -= 1
            self._owner.transcript.append(self._owner._values[self._position])

        def successor(self):
            nxt = self._owner._next.get(self._position)
            return None if nxt is None else self._owner._view(nxt)
