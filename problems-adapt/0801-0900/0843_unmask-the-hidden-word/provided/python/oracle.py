"""The hidden-word interrogator (problem-provided oracle).

Ships with the problem, assembled into every submission's namespace by
the judge, never editable in the editor: guess(word) answers how many
positions match the hidden word, and the verdict is whether the hidden
word itself was named within the call budget. This file is the
implementation; solvers see only the public API documented in the
starter.
"""


class Interrogator:
    def __init__(self, wordlist: list[str], secret: str, budget: int):
        self.wordlist = wordlist
        self.secret = secret
        self.budget = budget
        self.calls = 0
        self.found = False

    def guess(self, word: str) -> int:
        if self.budget <= 0:
            raise RuntimeError("Interrogator guess budget exhausted")
        self.budget -= 1
        self.calls += 1
        if word == self.secret:
            self.found = True
        return sum(a == b for a, b in zip(word, self.secret))

    def verdict(self) -> bool:
        return self.found
