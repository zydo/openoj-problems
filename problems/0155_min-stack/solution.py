class MinStack:
    """Stack of (value, minimum-so-far) pairs — each entry is self-contained."""

    def __init__(self) -> None:
        self.stack: list[tuple[int, int]] = []

    def push(self, value: int) -> None:
        if self.stack:
            self.stack.append((value, min(value, self.stack[-1][1])))
        else:
            self.stack.append((value, value))

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1][0]

    def getMin(self) -> int:
        return self.stack[-1][1]
