from typing import Callable


class WaterMolecule:
    def __init__(self) -> None:
        raise NotImplementedError("TODO")

    def hydrogen(self, releaseHydrogen: Callable[[], None]) -> None:
        raise NotImplementedError("TODO")

    def oxygen(self, releaseOxygen: Callable[[], None]) -> None:
        raise NotImplementedError("TODO")
