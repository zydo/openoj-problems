import random


class RandomDrawWithExclusions:
    """The n - b allowed values are compressed into [0, n - b); each
    excluded value inside that range is remapped onto a free value from
    the upper part [n - b, n). pick() then makes exactly one random call
    over the compressed range and follows the remap — uniform over exactly
    the allowed values."""

    def __init__(self, n: int, excluded: list[int]) -> None:
        blocked = set(excluded)
        self.size = n - len(blocked)
        self.mapping: dict[int, int] = {}
        free = (value for value in range(self.size, n) if value not in blocked)
        for value in blocked:
            if value < self.size:
                self.mapping[value] = next(free)

    def pick(self) -> int:
        draw = random.randrange(self.size)
        return self.mapping.get(draw, draw)
