import random
from typing import List


class CellFlipper:
    def __init__(self, m: int, n: int):
        self.m = m
        self.n = n
        self.total = m * n
        self.remaining = m * n
        self.mapping = {}
        self.rng = random.Random(519)

    def flipCell(self) -> List[int]:
        index = self.rng.randrange(self.remaining)
        value = self.mapping.get(index, index)
        last = self.remaining - 1
        last_value = self.mapping.pop(last, last)
        if index != last:
            self.mapping[index] = last_value
        self.remaining = last
        return [value // self.n, value % self.n]

    def resetAll(self):
        self.remaining = self.total
        self.mapping.clear()
