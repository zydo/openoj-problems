import threading
from typing import Callable


class TickTockPair:
    # One permit starts on tick's side, so the alternation opens with "tick";
    # each print hands the single permit to the other method.
    def __init__(self, n: int) -> None:
        self.n = n
        self.foo_permit = threading.Semaphore(1)
        self.bar_permit = threading.Semaphore(0)

    def tick(self, emitTick: Callable[[], None]) -> None:
        for _ in range(self.n):
            self.foo_permit.acquire()
            emitTick()
            self.bar_permit.release()

    def tock(self, emitTock: Callable[[], None]) -> None:
        for _ in range(self.n):
            self.bar_permit.acquire()
            emitTock()
            self.foo_permit.release()
