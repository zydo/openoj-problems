from typing import List, Optional


class LayerCube:
    def __init__(self, n: int):
        raise NotImplementedError("TODO")

    def setCell(self, x: int, y: int, z: int):
        raise NotImplementedError("TODO")

    def unsetCell(self, x: int, y: int, z: int):
        raise NotImplementedError("TODO")

    def densestLayer(self) -> int:
        raise NotImplementedError("TODO")
