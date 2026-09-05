import threading
from typing import Callable


class ThreadedFizzBuzz:
    def __init__(self, n: int) -> None:
        self.n = n
        self.position = 1
        self.condition = threading.Condition()

    def _step(self, matches, emit) -> bool:
        # Emit position's token when this thread's predicate matches; False
        # once the series is complete.
        with self.condition:
            while True:
                if self.position > self.n:
                    self.condition.notify_all()
                    return False
                if matches(self.position):
                    emit(self.position)
                    self.position += 1
                    self.condition.notify_all()
                    return True
                self.condition.wait()

    def fizz(self, emitFizz: Callable[[], None]) -> None:
        while self._step(lambda v: v % 3 == 0 and v % 5 != 0, lambda v: emitFizz()):
            pass

    def buzz(self, emitBuzz: Callable[[], None]) -> None:
        while self._step(lambda v: v % 5 == 0 and v % 3 != 0, lambda v: emitBuzz()):
            pass

    def fizzbuzz(self, emitFizzBuzz: Callable[[], None]) -> None:
        while self._step(lambda v: v % 15 == 0, lambda v: emitFizzBuzz()):
            pass

    def number(self, emitNumber: Callable[[int], None]) -> None:
        while self._step(lambda v: v % 3 != 0 and v % 5 != 0, emitNumber):
            pass
