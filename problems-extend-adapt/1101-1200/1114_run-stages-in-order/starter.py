from typing import Callable, List, Optional


class StageSequence:
    def __init__(self) -> None:
        raise NotImplementedError("TODO")

    def first(self, emitFirst: Callable[[], None]) -> None:
        raise NotImplementedError("TODO")

    def second(self, emitSecond: Callable[[], None]) -> None:
        raise NotImplementedError("TODO")

    def third(self, emitThird: Callable[[], None]) -> None:
        raise NotImplementedError("TODO")
