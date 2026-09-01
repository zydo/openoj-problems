from typing import Callable, List, Optional


class NumberStream:
    def __init__(self, n: int) -> None:
        raise NotImplementedError("TODO")

    def zero(self, emitNumber: Callable[[], None]) -> None:
        raise NotImplementedError("TODO")

    def even(self, emitNumber: Callable[[], None]) -> None:
        raise NotImplementedError("TODO")

    def odd(self, emitNumber: Callable[[], None]) -> None:
        raise NotImplementedError("TODO")
