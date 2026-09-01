from typing import Callable, List, Optional


class TickTockPair:
    def __init__(self, n: int) -> None:
        raise NotImplementedError("TODO")

    def tick(self, emitTick: Callable[[], None]) -> None:
        raise NotImplementedError("TODO")

    def tock(self, emitTock: Callable[[], None]) -> None:
        raise NotImplementedError("TODO")
