from typing import List, Optional


class PrefixSuggester:
    def __init__(self, sentences: List[str], times: List[int]) -> None:
        raise NotImplementedError("TODO")

    def typeCharacter(self, c: str) -> List[str]:
        raise NotImplementedError("TODO")
