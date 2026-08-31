from typing import List, Optional


class OneEditDictionary:
    def __init__(self):
        raise NotImplementedError("TODO")

    def loadWords(self, dictionary: List[str]):
        raise NotImplementedError("TODO")

    def matchesOneEdit(self, searchWord: str) -> bool:
        raise NotImplementedError("TODO")
