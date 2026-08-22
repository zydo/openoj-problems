import random


class Solution:
    """The list is materialized once as an array of node values (the wire
    form already lists them in order). draw draws one slot uniformly,
    which is exactly a uniform choice over the list's nodes."""

    def __init__(self, head: list[int]) -> None:
        self.values: list[int] = list(head)

    def draw(self) -> int:
        return self.values[random.randrange(len(self.values))]
